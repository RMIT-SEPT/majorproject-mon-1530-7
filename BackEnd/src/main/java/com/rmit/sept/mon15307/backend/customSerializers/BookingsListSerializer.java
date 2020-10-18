package com.rmit.sept.mon15307.backend.customSerializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.model.BookingsList;

import java.io.IOException;

public class BookingsListSerializer extends StdSerializer<BookingsList> {
    public BookingsListSerializer() {
        this(null);
    }

    public BookingsListSerializer(Class<BookingsList> t) {
        super(t);
    }

    @Override
    public void serialize(
        BookingsList bookingsList,
        JsonGenerator jsonGenerator,
        SerializerProvider serializerProvider
    ) throws IOException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeArrayFieldStart("bookings");

        for (Booking booking : bookingsList) {
            jsonGenerator.writeStartObject();
            BookingSerializer.serializeBookingFields(jsonGenerator, booking);
            jsonGenerator.writeEndObject();
        }

        jsonGenerator.writeEndArray();
        jsonGenerator.writeEndObject();
    }
}



