import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
async function fetchData() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('حدث خطأ أثناء جلب البيانات:', err);  // معالجة الأخطاء هنا
  }
}

fetchData();

