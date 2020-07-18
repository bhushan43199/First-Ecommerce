import { Component, OnInit } from '@angular/core';
import { MyOrderByPipe } from 'src/app/Shared Components/sort.pipe';
import { SearchPipe } from 'src/app/Shared Components/search.pipe';


@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent{

    search : any;
  
  constructor(private orderPipe: MyOrderByPipe) {
    console.log("order by Discount");
    console.log(this.orderPipe.transform(this.items, 'Discount'));
  } 

  items = [
    { Product: "Car", image: "https://www.tabulizer.com/images/tabulizer/demo/car.jpg",Price: "40000$", Discount: '10%' },
    { Product: "House", image: "https://www.tabulizer.com/images/tabulizer/demo/house.gif", Price: "5000000$", Discount: '20%' },
    { Product: "Scooter", image: "https://e7.pngegg.com/pngimages/294/156/png-clipart-scooter-vespa-gts-piaggio-car-scooter-scooter-car-thumbnail.png",Price: "4500$", Discount: '17%' },
    { Product: "Bike", image: "https://img2.wikia.nocookie.net/__cb20120421153148/sonsofanarchy/images/thumb/e/e7/Sacks_bike.jpg/240px-Sacks_bike.jpg",Price: "45000$", Discount: '17%' },

    { Product: "Airplain", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Airbus_A319_-_April_2019_%28EC-MFO%29.jpg/280px-Airbus_A319_-_April_2019_%28EC-MFO%29.jpg",Price: "45000000$", Discount: '17%' },

    { Product: "Helicoper", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Force_A%C3%A9rienne_du_Djibouti_Mi-35P_Hind.jpg/280px-Force_A%C3%A9rienne_du_Djibouti_Mi-35P_Hind.jpg",Price: "4500000$", Discount: '17%' },

  ];

  order = "title";
  reverse = false;


}
