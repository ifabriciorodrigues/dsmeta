package com.devsuperior.dsmeta.util;

import com.devsuperior.dsmeta.domain.Sale;

public class SmsUtils {
   static public String composeSmsMessageForSale(Sale sale) {
        return String.format(
                "On %s, the seller %s has sold %d items, resulting in a total of %,.2f USD in goods, with their store being visited %d times.",
                sale.getDate(),
                sale.getSellerName(),
                sale.getQuantity(),
                sale.getTotal(),
                sale.getTimesVisited()
        );
    }
}
