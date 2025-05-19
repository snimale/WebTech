package com.example.practice.controllers;

import com.example.practice.entity.Item;
import com.example.practice.pojo.itemDetails;
import com.example.practice.services.itemService;
import jdk.jfr.ContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ItemController {
    @Autowired
    itemService itemser;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/crud/{itemId}", produces = "application/json")
    public Item getItemPathVar(@PathVariable Integer itemId) {
        return itemser.getItemById(itemId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/crud")
    public String getItemReqParam(@RequestParam String itemName) {
        return itemName;
    }

    // the sender must send data in JSON only, no other format work
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/additems", produces = "application/json")
    public Item addItem(@RequestBody Item item) {
        return itemser.addItem(item);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(value = "/delitems")
    public String addItem(@RequestParam Integer delId) {
        itemser.deleteItem(delId);
        return "Deleted: "+delId;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping(value = "/updateitem")
    public Item updateItem(@RequestBody Item item) {
        return itemser.updateItem(item);
    }
}
