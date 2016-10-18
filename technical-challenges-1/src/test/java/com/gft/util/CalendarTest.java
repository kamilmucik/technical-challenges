package com.gft.util;

import org.junit.Assume;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDate;
import static org.junit.Assert.assertTrue;

/**
 * Created by kamu on 2016-10-18.
 */
public class CalendarTest {

    private Calendar calendar;


    @Before
    public void setup() {
        calendar = new Calendar();
    }

    @Test
    public void testGetMessage() {
        Assume.assumeNotNull(calendar);
        assertTrue(calendar.getLocalDate() instanceof LocalDate);
    }
}
