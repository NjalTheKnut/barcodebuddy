import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner) {

  }

  barcodeData: any;
  scanResult: any;

  goToUpdate() {
    this.navCtrl.push('page-update');
  }

  goToFetch() {
    this.navCtrl.push('page-fetch');
  }

  ScanBarcode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log("Scan Successful: " + barcodeData.text);
      this.scanResult = barcodeData.text;
      alert("Scan Successful: " + this.scanResult);
    }, (err) => {
      console.error("Scan Failure: " + err);
      alert("Scan Failure: " + err);
      return;
    });
  }
}
