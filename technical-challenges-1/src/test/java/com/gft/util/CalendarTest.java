package com.gft.util;

import org.junit.Assume;
import org.junit.Before;
import org.junit.Test;

import java.text.ParseException;
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
    public void getLocalDateTest() {
        Assume.assumeNotNull(calendar);
        assertTrue(calendar.getLocalDate() instanceof LocalDate);
    }

    @Test
    public void formatTest() throws ParseException {
        System.out.println(Calendar.FORMATTER.format(LocalDate.now()) );
        System.out.println(prepare());
    }

    private LocalDate prepare () {
        return LocalDate.parse("2016/IX/19", Calendar.FORMATTER);
    }
}
