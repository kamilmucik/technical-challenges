package com.gft.util;

import org.junit.Assert;
import org.junit.Assume;
import org.junit.Before;
import org.junit.Test;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.ParseException;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.Iterator;

import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

/**
 * Created by kamu on 2016-10-18.
 */
public class CalendarTest {

    static final Logger LOG = LoggerFactory.getLogger(CalendarTest.class);

    private Calendar calendar;

    @Before
    public void setup() {
        calendar = new Calendar(prepare());
    }

    @Test
    public void getLocalDateTest() {
        Assume.assumeNotNull(calendar);
        assertTrue(calendar.getLocalDate() instanceof LocalDate);
    }

    @Test
    public void iteratorTest(){
        int i = 0;
        for (LocalDate ld : calendar) {
            if (!ld.getDayOfWeek().equals(DayOfWeek.TUESDAY) &&
                    !ld.getDayOfWeek().equals(DayOfWeek.FRIDAY)){
                fail("Should return only Tuesday and Friday");
            }
            i++;
            if (i > 10 ) break;
        }
    }

    @Test (expected = UnsupportedOperationException.class)
    public void removeFromIteratorTest(){
        Assume.assumeNotNull(calendar);
        calendar.iterator().remove();
    }

    @Test
    public void formatTest() throws ParseException {
        Assume.assumeNotNull(calendar);
        Assert.assertEquals("2016/IX/19" ,Calendar.FORMATTER.format(calendar.getDate()) );
    }

    private LocalDate prepare() {
        return LocalDate.parse("2016/IX/19", Calendar.FORMATTER);
    }
}
