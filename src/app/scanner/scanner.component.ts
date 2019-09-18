import { Component, VERSION, OnInit, ViewChild } from '@angular/core';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Decode } from '../decode';
import { Result } from '@zxing/library';
import { Subscription } from 'rxjs';
import { EstacaoService } from '../service/estacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
 ngVersion = VERSION.full;

  @ViewChild('scanner', { static: true })
  scanner: ZXingScannerComponent;
  alert = false;
  hasCameras = false;
  hasPermission: boolean | undefined;
  qrResultString: string;
  sub: Subscription;
  decode: Decode;

  read: boolean;
  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo | null;

  constructor(private estacaoServ: EstacaoService, private route: Router){}
  ngOnInit(): void {

    this.read = true;

    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasCameras = true;

      console.log('Devices: ', devices);
      this.availableDevices = devices;

    });

    this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
      console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
    });

    this.scanner.permissionResponse.subscribe((answer: boolean) => {
      this.hasPermission = answer;
    });

  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasCameras = Boolean(devices && devices.length);
  }

  handleQrCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    this.qrResultString = resultString;
    this.alert = true;
    if (this.read) {
      this.decode = { decode: this.qrResultString  };
      this.sub = this.estacaoServ.postQRCode(this.decode).subscribe((result: any) => { this.route.navigate(['/estacao', result.estacao]);}, 
      (err) => { if(err.status === 404){ alert('QR Code não inválido') } });
    }
    this.read = false;
  }

  onDeviceSelectChange(selected: string) {
    const deviceasdasdsas: MediaDeviceInfo | null = this.availableDevices.find(x => x.deviceId === selected);
    this.selectedDevice = deviceasdasdsas || null;
  }

  closeAlert() {
    this.alert = false;
  }
}