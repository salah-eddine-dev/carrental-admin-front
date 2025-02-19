import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { VehicleType } from '../type';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor(private http: HttpClient) {}

  getVehicles(page: number, size: number): Observable<any> {
    return this.http.get<any>(environment.backend1 + `/vehicules?page=${page}&size=${size}`);
  }

  getVehiclesById(id: number): Observable<any> {
    return this.http.get<VehicleType>(environment.backend1 + `/vehicules/${id}`);
  }

  deleteVehicles(id: number): Observable<any> {
    return this.http.delete<any>(environment.backend1 + `/vehicules/${id}`);
  }
  CreateVehicle(credentials: VehicleType): Observable<VehicleType> {
    return this.http.post<VehicleType>(environment.backend1 + '/vehicules', [credentials]);
  }
}
