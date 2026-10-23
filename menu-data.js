const MENU_DATA = {
  restaurantName: 'Bita Coffee and Burger',
  currency: 'ETB',
  vatNote: 'All prices are 15% VAT inclusive',

  categories: [
    {
      category: 'Sandwich',
      items: [
        { name: 'Egg Sandwich', amharic: 'እንቁላል ሳንዱች', price: 300 },
        { name: 'Egg Sandwich w. Cheese', amharic: 'እንቁላል በቺዝ', price: 350 },
        { name: 'Egg Fried', amharic: 'እንቁላል ፍርፍር', price: 325 },
        { name: 'Egg Fried w. Meat', amharic: 'እንቁላል በሥጋ', price: 425 },
        { name: 'Vegetable Sandwich', amharic: 'ሳንዱች', price: 330 },
        { name: 'Club Sandwich', amharic: 'ክለብ ሳንዱች', price: 500 },
        { name: 'Fetira with Telba', amharic: 'ፈጢራ', price: 300 },
        { name: 'Fetira Special', amharic: 'ፈጢራ', price: 300 },
        { name: 'Fetira Normal', amharic: 'ፈጢራ', price: 200 },
        { name: 'Chechebsa', amharic: 'ጨጨብሳ', price: 230 },
        { name: 'Chechebsa Special', amharic: 'ጨጨብሳ', price: 300 },
        { name: 'Chechebsa Teff', amharic: 'ጨጨብሳ', price: 230 },
        { name: 'Chechebsa Special Teff', amharic: 'ጨጨብሳ', price: 300 },
        { name: 'Ful', amharic: 'ፉል', price: 210 },
        { name: 'Ful Special', amharic: 'ስፔሻል ፉል', price: 325 },
        { name: 'Kinche', amharic: 'ቅንጬ', price: 225 }
      ]
    },
    {
      category: 'Traditional',
      items: [
        { name: 'Half Half', amharic: 'ምስርና ቲማቲም', price: 300 },
        { name: 'Half Half', amharic: 'ሽሮና ቲማቲም', price: 300 },
        { name: 'Half Half', amharic: 'ሽሮና ተልባ', price: 350 },
        { name: 'Half Half', amharic: 'ሽሮና ሱፍ', price: 350 },
        { name: 'Tibs / Chikina', amharic: 'ጥብስ', price: '550 / 650' },
        { name: 'Tibs Firfir', amharic: 'ጥብስ ፍርፍር', price: 400 },
        { name: 'Quanta Firfir w. Dirkosh', amharic: 'ቋንጣ ፍርፍር', price: 420 },
        { name: 'Shiro / Tegabino', amharic: 'ሽሮ ተጋቢኖ', price: '300 / 350' },
        { name: 'Bozena Shiro', amharic: 'ቦዘና ሽሮ', price: 400 },
        { name: 'Pasta / Bolognese', amharic: 'ፓስታ', price: 400 },
        { name: 'Vegetable Pasta', amharic: 'ፓስታ ባትክልት', price: 330 },
        { name: 'Rice with Vegetable', amharic: 'ሩዝ ባትክልት', price: 330 },
        { name: 'Rice with Meat', amharic: 'ሩዝ በሥጋ', price: 425 },
        { name: 'Firfir', amharic: 'ፍርፍር', price: 250 },
        { name: 'Firfir Dirkosh', amharic: 'ፍርፍር', price: 280 },
        { name: 'Dirkosh Tibs', amharic: 'ፍርፍር', price: 480 }
      ]
    },
    {
      category: 'Burger & Wrap',
      items: [
        { name: 'French Fries', amharic: 'ቺፕስ', price: 300 },
        { name: 'Sambusa', amharic: 'ሳምቡሳ', price: 300 },
        { name: 'Vegetable Wrap / Beef', amharic: '', price: 400 },
        { name: 'Chicken Wrap', amharic: 'ቺክን ራፕ', price: 690 },
        { name: 'Tuna Wrap', amharic: 'ቱና ራፕ', price: 570 },
        { name: 'Beef Wrap', amharic: 'ቢፍ ራፕ', price: 540 },
        { name: 'Burger', amharic: 'ቢፍ በርገር', price: 540 },
        { name: 'Cheese Burger', amharic: 'ቺዝ በርገር', price: 590 },
        { name: 'Bita Special Burger', amharic: 'ቢታ ስፔሻል በርገር', price: 790 }
      ]
    },
    {
      category: 'Pizzeria',
      items: [
        { name: 'Tuna Pizza', amharic: 'ቱና ፒዛ', price: 590 },
        { name: 'Beef Pizza', amharic: 'ቢፍ ፒዛ', price: 590 },
        { name: 'Chicken Pizza', amharic: 'ቺክን ፒዛ', price: 790 },
        { name: 'Margarita Pizza', amharic: 'ማርጋሪታ ፒዛ', price: 600 },
        { name: "Bita's Special Pizza", amharic: 'ቢታ ስፔሻል ፒዛ', price: 850 },
        { name: 'Al-Tuna Pizza', amharic: 'አል ቱና ፒዛ', price: 650 },
        { name: 'Vegetable Pizza', amharic: 'አትክልት ፒዛ', price: 420 }
      ]
    },
    {
      category: 'Hot Drinks',
      items: [
        { name: 'Jebena Coffee', amharic: 'የጀበና ቡና', price: 45 },
        { name: 'Coffee', amharic: 'የማሽን ቡና', price: 80 },
        { name: 'Spris', amharic: 'ስፕሪስ', price: 75 },
        { name: 'Tea', amharic: 'ሻይ', price: 50 },
        { name: 'Lemon Tea', amharic: 'ሎሚ ሻይ', price: 65 },
        { name: 'Flavor Tea', amharic: 'ፍሌቨር ሻይ', price: 80 },
        { name: 'Special Tea', amharic: 'ስፔሻል ሻይ', price: 130 },
        { name: 'Lewz Tea', amharic: 'ለውዝ ሻይ', price: 110 },
        { name: 'Lewz with Milk', amharic: 'ለውዝ ወተት', price: 130 },
        { name: 'Lewz with Coffee', amharic: 'ለውዝ ቡና', price: 125 },
        { name: 'Keshir', amharic: 'ቅሽር', price: 65 },
        { name: 'Milk', amharic: 'ወተት', price: 125 },
        { name: 'Macchiato', amharic: 'ማኪያቶ', price: 110 },
        { name: 'Fasting Macchiato', amharic: 'የፆም ማኪያቶ', price: 145 },
        { name: 'Café Latte', amharic: '', price: 125 }
      ]
    },
    {
      category: 'Cake',
      items: [
        { name: 'Banana Cake', amharic: 'ባናና', price: 95 },
        { name: 'Orange Cake', amharic: 'ኦሬንጅ', price: 90 },
        { name: 'English Cake', amharic: 'ኢንግሊሽ', price: 100 },
        { name: 'Marble Cake', amharic: 'ማርብል', price: 100 },
        { name: 'Mini Cake', amharic: 'ሚኒ', price: 200 },
        { name: 'Chocolate Cake', amharic: 'ችኮሌት', price: 300 },
        { name: 'Combo Cake', amharic: 'ኮምቦ', price: 300 },
        { name: 'Torta', amharic: 'ቶርታ', price: 2000 }
      ]
    },
    {
      category: 'Water & Soft Drinks',
      items: [
        { name: 'Soft Drinks', amharic: 'ለስላሳ', price: 60 },
        { name: 'Ambo Water', amharic: 'አምቦ ውሃ', price: 65 },
        { name: 'Water 1/2 Liter', amharic: '½ ሊትር ውሃ', price: 45 },
        { name: 'Water 1 Liter', amharic: '1 ሊትር ውሃ', price: 60 },
        { name: 'Water 2 Liter', amharic: '2 ሊትር ውሃ', price: 60 }
      ]
    },
    {
      category: 'Juice',
      items: [
        { name: 'Pineapple Juice', amharic: 'አናናስ', price: 230 },
        { name: 'Avocado Juice', amharic: 'አቮካዶ', price: 230 },
        { name: 'Papaya Juice', amharic: 'ፓፓያ', price: 230 },
        { name: 'Mango Juice', amharic: 'ማንጎ', price: 230 },
        { name: 'Mixed Juice', amharic: 'ሽንፈሪስ', price: 230 },
        { name: 'Telba (Flaxseed) Juice', amharic: 'ተልባ', price: 230 }
      ]
    }
  ]
};
