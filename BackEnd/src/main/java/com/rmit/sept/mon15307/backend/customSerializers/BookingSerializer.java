package com.rmit.sept.mon15307.backend.customSerializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.model.BookingsList;

import java.io.IOException;
import java.util.List;

public class BookingSerializer extends StdSerializer<BookingsList> {

    public BookingSerializer(){
        this(null);
    }

    public BookingSerializer(Class<BookingsList> t){
        super(t);
    }

    @Override
    public void serialize(
            BookingsList bookingsList, JsonGenerator jsonGenerator, SerializerProvider serializerProvider)
            throws IOException, JsonProcessingException {

        List<Booking> bookings = bookingsList.getBookingsList();

        if (bookings.isEmpty()) {
            jsonGenerator.writeStartObject();
            jsonGenerator.writeArrayFieldStart("bookings");
            jsonGenerator.writeEndArray();
            jsonGenerator.writeEndObject();
        }
        else {
            jsonGenerator.writeStartObject();
            jsonGenerator.writeArrayFieldStart("bookings");
            for (Booking booking : bookings) {
                jsonGenerator.writeStartObject();
                jsonGenerator.writeFieldName("id");
                jsonGenerator.writeObject(booking.getBookingId());
                jsonGenerator.writeStringField("status", String.valueOf(booking.getStatus()));
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
                jsonGenerator.writeStringField("appointment_time", booking.getSchedule().getDate()
                        + "T" + booking.getTime());
                jsonGenerator.writeEndObject();
            }
            jsonGenerator.writeEndArray();
        }
    }
}

