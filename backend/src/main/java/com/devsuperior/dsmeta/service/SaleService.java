package com.devsuperior.dsmeta.service;

import com.devsuperior.dsmeta.domain.Sale;
import com.devsuperior.dsmeta.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    public Page<Sale> getAll(String minDate, String maxDate,Pageable pageable) {
        LocalDate TODAY_DATE = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

        LocalDate min = minDate.equals("") ? TODAY_DATE.minusDays(365) : LocalDate.parse(minDate);
        LocalDate max = maxDate.equals("") ? TODAY_DATE : LocalDate.parse(maxDate);

        return saleRepository.findSales(min, max, pageable);
    }
}
