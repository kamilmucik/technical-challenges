package com.gft.util;

import org.assertj.core.api.Assertions;
import org.junit.Test;

import java.time.LocalDate;
import java.util.Iterator;

public class CalendarTest {

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
}
