package com.example.practice.pojo;

import org.springframework.stereotype.Component;

@Component
public class itemDetails {
    public String itemName;
    public String itemDesc;

    public String getItemDesc() {
        return itemDesc;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemDesc(String itemDesc) {
        this.itemDesc = itemDesc;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }
}
