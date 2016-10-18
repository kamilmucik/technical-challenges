package com.gft.util;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.time.format.SignStyle;
import java.time.temporal.ChronoField;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * Created by kamu on 2016-10-18.
 */
public class Calendar implements Iterable<LocalDate>{

    private int start;
    private int end;

    static final Map<Long, String> ROMAN_MONTHS = new HashMap<Long, String>();

    static DateTimeFormatter FORMATTER;

    static {
        ROMAN_MONTHS.put(1L, "I");
        ROMAN_MONTHS.put(2L, "II");
        ROMAN_MONTHS.put(3L, "III");
        ROMAN_MONTHS.put(4L, "IV");
        ROMAN_MONTHS.put(5L, "V");
        ROMAN_MONTHS.put(6L, "VI");
        ROMAN_MONTHS.put(7L, "VII");
        ROMAN_MONTHS.put(8L, "VIII");
        ROMAN_MONTHS.put(9L, "IX");
        ROMAN_MONTHS.put(10L, "X");
        ROMAN_MONTHS.put(11L, "XI");
        ROMAN_MONTHS.put(12L, "XII");

        FORMATTER = new DateTimeFormatterBuilder()
                .appendValue(ChronoField.YEAR, 4)
                .appendLiteral('/')
                .appendText(ChronoField.MONTH_OF_YEAR, ROMAN_MONTHS)
                .appendLiteral('/')
                .appendValue(ChronoField.DAY_OF_MONTH, 1, 2, SignStyle.NORMAL)
                .toFormatter();
    }

    public LocalDate getLocalDate() {
        return LocalDate.now();
    }


    @Override
    public Iterator<LocalDate> iterator() {
        return new CalendarIterator<LocalDate>();
    }

    private class CalendarIterator <LocalDate> implements Iterator<java.time.LocalDate> {

        private int cursor;

        public boolean hasNext() {

            //implement...
            return true;
        }

        public java.time.LocalDate next() {
            //implement...;
            return null;
        }

        public void remove() {
            throw new UnsupportedOperationException();
        }
    }
}
