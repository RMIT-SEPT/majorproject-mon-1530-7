package com.rmit.sept.mon15307.backend.customSerializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import com.rmit.sept.mon15307.backend.model.Booking;

import java.io.IOException;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class BookingSerializer extends StdSerializer<Booking> {

    public BookingSerializer() {
        this(null);
    }

    public BookingSerializer(Class<Booking> t) {
        super(t);
    }

    static JsonGenerator serializeBookingFields(JsonGenerator jsonGenerator, Booking booking)
        throws IOException {
        jsonGenerator.writeStringField("id", booking.getBookingId().toString());

        jsonGenerator.writeStringField("status", booking.getStatus().toString().toLowerCase());

        jsonGenerator.writeObjectFieldStart("staff_member");
        jsonGenerator.writeStringField("id", booking.getEmployee().getId());
        jsonGenerator.writeStringField("name", booking.getEmployee().getName());
        jsonGenerator.writeEndObject();

        jsonGenerator.writeObjectFieldStart("product");
        jsonGenerator.writeStringField("id", booking.getProduct().getId());
        jsonGenerator.writeStringField("name", booking.getProduct().getName());
        jsonGenerator.writeNumberField("duration", booking.getProduct().getDuration());
        jsonGenerator.writeEndObject();

        jsonGenerator.writeObjectFieldStart("user");
        jsonGenerator.writeNumberField("id", booking.getCustomer().getUserId());
        jsonGenerator.writeStringField("preferredName", booking.getCustomer().getPreferredName());
        jsonGenerator.writeStringField("fullName", booking.getCustomer().getFullName());
        jsonGenerator.writeStringField("phoneNumber", booking.getCustomer().getPhoneNumber());
        jsonGenerator.writeEndObject();

        jsonGenerator.writeStringField("appointment_time",
                                       ZonedDateTime
                                           .of(booking.getSchedule().getDate(),
                                               LocalTime.parse(booking.getTime()),
                                               // TODO: pull from app config
                                               ZoneId.of("Australia/Melbourne")
                                           )
                                           .toOffsetDateTime()
                                           .toString()
        );
        return jsonGenerator;
    }

    @Override
    public void serialize(
        Booking booking, JsonGenerator jsonGenerator, SerializerProvider serializerProvider
    ) throws IOException {
        jsonGenerator.writeStartObject();

        jsonGenerator.writeObjectFieldStart("booking");

        serializeBookingFields(jsonGenerator, booking);

        jsonGenerator.writeEndObject();

        jsonGenerator.writeEndObject();
    }
}

