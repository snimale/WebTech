package com.example.practice.services;

import com.example.practice.entity.Item;
import com.example.practice.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class itemService {
    @Autowired
    ItemRepository itemRepository;

    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    public Item getItemById(Integer id) {
        return itemRepository.findById(id).orElse(null);
    }

    public List<Item> getItemsByName(String itemName) {
        return itemRepository.findByitemName(itemName);
    }

    public Item addItem(Item item) {
        return itemRepository.save(item);
    }

    public Item updateItem(Item item) {
        Item currItem = itemRepository.findById(item.id).orElse(null);
        currItem.itemName = item.itemName;
        currItem.itemDesc = item.itemDesc;
        return currItem;
    }

    public void deleteItem(Integer id) {
        itemRepository.deleteById(id);
    }
}
