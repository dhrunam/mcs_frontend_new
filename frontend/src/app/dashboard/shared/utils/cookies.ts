import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class CookieUtils {
    constructor(private cookieService: CookieService) { }

    // Store data in cookie
    setCookie(key: string, value: any, days: number = 30): void {
        this.cookieService.set(key, JSON.stringify(value), days, '/');
    }

    // Retrieve data from cookie
    getCookie<T>(key: string): T | null {
        const cookieValue = this.cookieService.get(key);
        return cookieValue ? JSON.parse(cookieValue) as T : null;
    }

    // Delete a specific cookie
    deleteCookie(key: string): void {
        this.cookieService.delete(key, '/');
    }

    // Delete all cookies
    deleteAllCookies(): void {
        this.cookieService.deleteAll('/');
    }



    getFilteredData(){
       return this.getCookie('filterData');
    }

    setAndGetFilterData(data:any| null): any {
        
        if(data){
            this.setCookie('filterData',data)    
        }
        const storedData = this.getCookie('filterData');
        if (storedData)
        {
            return storedData; // Return stored cookie data if available
        }

        // If no cookie exists, create default filterData
        const today = new Date();
        const lastMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);

        const filterData = {
            month: '' + (lastMonthDate.getMonth() + 1),
            year: '' + lastMonthDate.getFullYear(),
            organization: '' + 3,
            selected_user: null,
            case_type: '' + 1,
            case_type_name: null,
            user: '' + 3,
        };

        // Store default filterData in cookie
        this.setCookie('filterData', filterData);

        return filterData; // Return newly set filterData
    }
}
