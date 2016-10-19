package com.gft.util;

import org.assertj.core.api.Assertions;
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

import static org.assertj.core.api.Assertions.*;
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
    public void shouldReturnWellKnowValues(){
        // arrange
        Calendar cal = new Calendar(LocalDate.of(2016, 9, 19));

        // act
        Iterator<LocalDate> it = cal.iterator();

        // assert
        Assertions.assertThat(it.next()).isEqualTo(LocalDate.of(2016, 9, 20));
        Assertions.assertThat(it.next()).isEqualTo(LocalDate.of(2016, 9, 23));
        Assertions.assertThat(it.next()).isEqualTo(LocalDate.of(2016, 9, 27));

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
