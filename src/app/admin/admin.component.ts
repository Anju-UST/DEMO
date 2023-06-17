// admin-dashboard.component.ts
import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  showAddItemForm: boolean = false;
  menuItems: MenuItem[] = [
    
    {
      name: 'Banarazi Saree',
      description: 'Description of Item 1',
      price: 1099,
      image: 'assets/images/saree1.jpg',
      quantity: 1 ,
      category: 'starter'
    },
    {
      name: 'Banarazi Saree',
      description: 'Description of Item 2',
      price: 1500,
      image: 'assets/images/saree2.jpeg',
      quantity: 1 ,
      category: 'bridal'
    },
    {
      name: 'Banarazi Saree',
      description: 'Description of Item 3',
      price: 12,
      image: 'assets/images/saree3.jpg',
      quantity: 1 ,
      category: 'normal'
    },
    {
      name: 'Fried Potatoes',
      description: 'Description of Item 1',
      price: 10879,
      image: 'assets/images/saree4.jpg',
      quantity: 1 ,
      category: 'bridal'
    },
    {
      name: 'Banarazi Saree',
      description: 'Description of Item 1',
      price: 10,
      image: 'assets/images/saree5.jpg',
      quantity: 1 ,
      category: 'mehendi'
    },
    {
      name: 'Banarazi Saree',
      description: 'Description of Item 1',
      price: 10999,
      image: 'assets/images/saree6.jpg',
      quantity: 1 ,
      category: 'bridal'
    },
    {
      name: 'Banarazi Sareer',
      description: 'Description of Item 1',
      price: 1770,
      image: 'assets/images/saree7.jpg',
      quantity: 1 ,
      category: 'normal'
    },
    {
      name: 'Banarazi Saree',
      description: 'Description of Item 1',
      price: 1880,
      image: 'assets/images/saree8.jpg',
      quantity: 1 ,
      category: 'mehendi'
    },
    {
      name: 'Cotton Silk',
      description: 'Description of Item 1',
      price: 1770,
      image: 'assets/images/saree11.png',
      quantity: 1 ,
      category: 'casual'
    },
    {
      name: 'Banarazi Saree',
      description: 'Description of Item 3',
      price: 1200,
      image: 'assets/images/saree9.jpg',
      quantity: 1 ,
      category: 'bridal'
    },
    {
      name: 'Banarazi Saree',
      description: 'Description of Item 3',
      price: 12000,
      image: 'assets/images/saree10.jpg',
      quantity: 1 ,
      category: 'bridal'
    }
    // {
    //   name: 'Ayran- Turkish Yogurt Drink',
    //   description: 'Description of Item 3',
    //   price: 12,
    //   image: 'assets/images/food-24.webp',
    //   quantity: 1 ,
    //   category: 'drinks'
    // },
    // {
    //   name: 'spiced beetroot buttermilk',
    //   description: 'Description of Item 3',
    //   price: 12,
    //   image: 'assets/images/food-25.webp',
    //   quantity: 1 ,
    //   category: 'drinks'
    // },
    // {
    //   name: 'strawberry thandai',
    //   description: 'Description of Item 3',
    //   price: 12,
    //   image: 'assets/images/food-26.webp',
    //   quantity: 1 ,
    //   category: 'drinks'
    // },
    // {
    //   name: 'Lemon Chicken',
    //   description: 'Description of Item 3',
    //   price: 12,
    //   image: 'assets/images/food-27.jpeg',
    //   quantity: 1 ,
    //   category: 'dinner'
    // }
  ];
  newItem: MenuItem = {
    name: '',
    description: '',
    price: 0,
    image: '',
    quantity: 0,
    category: ''
  };
  showMenuItems: boolean = false;

  addItem(): void {
    this.showMenuItems = true;
    this.menuItems.push({ ...this.newItem });
    this.newItem = {
      name: '',
      description: '',
      price: 0,
      image: '',
      quantity: 0,
      category: ''
    };
  }

  editItem(item: MenuItem): void {
    const index = this.menuItems.indexOf(item);
    if (index !== -1) {
      const newName = prompt('Enter the new name:', item.name);
      if (newName !== null) {
        const newPriceString = prompt('Enter the new price:', item.price.toString());
        if (newPriceString !== null) {
          const newPrice = parseFloat(newPriceString);
          if (!isNaN(newPrice)) {
            this.menuItems[index].name = newName;
            this.menuItems[index].price = newPrice;
          }
        }
      }
    }
  }

  deleteItem(item: MenuItem): void {
    const index = this.menuItems.indexOf(item);
    if (index !== -1) {
      this.menuItems.splice(index, 1);
    }
  }
}

