package com.gft.util;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.time.format.SignStyle;
import java.time.temporal.ChronoField;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * Created by kamu on 2016-10-18.
 */
public class Calendar implements Iterable<LocalDate>{

    private LocalDate date;

    public static final Map<Long, String> ROMAN_MONTHS = new HashMap<Long, String>();

    public static final DateTimeFormatter FORMATTER;

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

    public Calendar(LocalDate localDate){
        this.date = localDate;
    }

    public LocalDate getLocalDate() {
        return LocalDate.now();
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public Iterator<LocalDate> iterator() {
        return new CalendarIterator<LocalDate>();
    }

    private class CalendarIterator <LocalDate> implements Iterator<java.time.LocalDate> {

        /**
         * Method always return true, because calendar is infinity.
         * @return
         */
        public boolean hasNext() {
            return true;
        }

        /**
         * Method next() return every <i>Tuesday</i> and <i>Friday</i> in week days.
         * @return
         */
        public java.time.LocalDate next() {
            do {
                setDate(date.plusDays(1));
            } while ( (!date.getDayOfWeek().equals(DayOfWeek.TUESDAY))
                    && (!date.getDayOfWeek().equals(DayOfWeek.FRIDAY)));

            return date;
        }

        /**
         * No one can remove date form calendar
         */
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }
}
