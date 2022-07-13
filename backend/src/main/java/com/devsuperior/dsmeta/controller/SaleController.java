package com.devsuperior.dsmeta.controller;

import com.devsuperior.dsmeta.domain.Sale;
import com.devsuperior.dsmeta.service.SaleService;
import com.devsuperior.dsmeta.service.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

    @Autowired
    private SaleService saleService;

    @Autowired
    private SmsService smsService;

    @GetMapping
    public Page<Sale> getAll(
            @RequestParam(value = "minDate", defaultValue = "") String minDate,
            @RequestParam(value = "maxDate", defaultValue = "") String maxDate,
            Pageable pageable
    ) {
        return saleService.getAll(minDate, maxDate, pageable);
    }

    @GetMapping(value = "/notify/{id}")
    public void notifyViaSms(@PathVariable Long id) {
        smsService.sendSms(id);
    }
}
