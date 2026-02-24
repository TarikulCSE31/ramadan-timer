// Ramadan Schedule Data (2026)
const ramadanSchedule = [
    // 10 Days of Mercy (রহমতের ১০ দিন)
    { day: 1, date: '2026-02-19', dayName: 'বৃহস্পতিবার', sehri: '05:12', iftar: '17:58' },
    { day: 2, date: '2026-02-20', dayName: 'শুক্রবার', sehri: '05:11', iftar: '17:58' },
    { day: 3, date: '2026-02-21', dayName: 'শনিবার', sehri: '05:11', iftar: '17:59' },
    { day: 4, date: '2026-02-22', dayName: 'রবিবার', sehri: '05:10', iftar: '17:59' },
    { day: 5, date: '2026-02-23', dayName: 'সোমবার', sehri: '05:09', iftar: '18:00' },
    { day: 6, date: '2026-02-24', dayName: 'মঙ্গলবার', sehri: '05:08', iftar: '18:00' },
    { day: 7, date: '2026-02-25', dayName: 'বুধবার', sehri: '05:08', iftar: '18:01' },
    { day: 8, date: '2026-02-26', dayName: 'বৃহস্পতিবার', sehri: '05:07', iftar: '18:01' },
    { day: 9, date: '2026-02-27', dayName: 'শুক্রবার', sehri: '05:06', iftar: '18:02' },
    { day: 10, date: '2026-02-28', dayName: 'শনিবার', sehri: '05:05', iftar: '18:02' },
    
    // 10 Days of Forgiveness (মাগফিরাতের ১০ দিন)
    { day: 11, date: '2026-03-01', dayName: 'রবিবার', sehri: '05:05', iftar: '18:03' },
    { day: 12, date: '2026-03-02', dayName: 'সোমবার', sehri: '05:04', iftar: '18:03' },
    { day: 13, date: '2026-03-03', dayName: 'মঙ্গলবার', sehri: '05:03', iftar: '18:04' },
    { day: 14, date: '2026-03-04', dayName: 'বুধবার', sehri: '05:02', iftar: '18:04' },
    { day: 15, date: '2026-03-05', dayName: 'বৃহস্পতিবার', sehri: '05:01', iftar: '18:05' },
    { day: 16, date: '2026-03-06', dayName: 'শুক্রবার', sehri: '05:00', iftar: '18:05' },
    { day: 17, date: '2026-03-07', dayName: 'শনিবার', sehri: '04:59', iftar: '18:06' },
    { day: 18, date: '2026-03-08', dayName: 'রবিবার', sehri: '04:58', iftar: '18:06' },
    { day: 19, date: '2026-03-09', dayName: 'সোমবার', sehri: '04:57', iftar: '18:07' },
    { day: 20, date: '2026-03-10', dayName: 'মঙ্গলবার', sehri: '04:57', iftar: '18:07' },
    
    // 10 Days of Salvation (নাজাতের ১০ দিন)
    { day: 21, date: '2026-03-11', dayName: 'বুধবার', sehri: '04:56', iftar: '18:07' },
    { day: 22, date: '2026-03-12', dayName: 'বৃহস্পতিবার', sehri: '04:55', iftar: '18:08' },
    { day: 23, date: '2026-03-13', dayName: 'শুক্রবার', sehri: '04:54', iftar: '18:08' },
    { day: 24, date: '2026-03-14', dayName: 'শনিবার', sehri: '04:53', iftar: '18:09' },
    { day: 25, date: '2026-03-15', dayName: 'রবিবার', sehri: '04:52', iftar: '18:09' },
    { day: 26, date: '2026-03-16', dayName: 'সোমবার', sehri: '04:51', iftar: '18:10' },
    { day: 27, date: '2026-03-17', dayName: 'মঙ্গলবার', sehri: '04:50', iftar: '18:10' },
    { day: 28, date: '2026-03-18', dayName: 'বুধবার', sehri: '04:49', iftar: '18:10' },
    { day: 29, date: '2026-03-19', dayName: 'বৃহস্পতিবার', sehri: '04:48', iftar: '18:11' },
    { day: 30, date: '2026-03-20', dayName: 'শুক্রবার', sehri: '04:47', iftar: '18:11' }
];

// Get current date and time in Bangladesh Standard Time (BST, UTC+6)
function getBangladeshTime() {
    const now = new Date();
    // Bangladesh is UTC+6
    const bangladeshOffset = 6 * 60; // 6 hours in minutes
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const bangladeshTime = new Date(utc + (bangladeshOffset * 60000));
    return bangladeshTime;
}

// Get current date in YYYY-MM-DD format (Bangladesh time)
// For testing: you can temporarily modify this function to return a date within Ramadan
// Example: return '2025-02-25'; // This would simulate being on day 7 of Ramadan
function getCurrentDate() {
    const bangladeshTime = getBangladeshTime();
    const year = bangladeshTime.getFullYear();
    const month = String(bangladeshTime.getMonth() + 1).padStart(2, '0');
    const day = String(bangladeshTime.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Get current time in HH:MM format (Bangladesh time)
function getCurrentTime() {
    const bangladeshTime = getBangladeshTime();
    const hours = String(bangladeshTime.getHours()).padStart(2, '0');
    const minutes = String(bangladeshTime.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Cookie management functions
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Time format conversion
let timeFormat24h = true; // Default to 24h format

// Language settings
let currentLanguage = 'en'; // Default to English

// Notifications & Adhan: track last triggered so we only fire once per event
let lastNotifiedSehriKey = '';  // e.g. '2026-02-24'
let lastNotifiedIftarKey = '';
let adhanFajr = null;
let adhanIftar = null;
const ADHAN_FAJR_SRC = 'audio/fajr-adhan.mp3';
const ADHAN_IFTAR_SRC = 'audio/iftar-adhan.mp3';
// Fallback when local files are missing (public domain adhan)
const ADHAN_FALLBACK_URL = 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Beautiful_adhan.ogg';

// Translation object
const translations = {
    en: {
        title: 'Ramadan Timer',
        ramadanDay: 'Ramadan Day',
        currentTime: 'Current Date & Time',
        nextEvent: 'Next Event',
        sehri: 'Sehri',
        iftar: 'Iftar',
        sehriTime: 'Sehri End Time',
        iftarTime: 'Iftar Time',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        days: 'Days',
        ramadanEnd: 'Ramadan Ended',
        notInRamadan: 'Not in Ramadan',
        toggleFullscreen: 'Toggle Fullscreen',
        toggleTimeFormat: 'Toggle 12h/24h Format',
        toggleLanguage: 'Toggle Language',
        currentDate: 'Current Date & Time',
        enableNotifications: 'Enable Notifications',
        notificationsEnabled: 'Notifications enabled',
        notifySehri: 'Sehri time has ended. Stop eating.',
        notifyIftar: 'Iftar time. You may break your fast.',
        installApp: 'Install app',
        installHint: 'Use the install icon (⊕) in the address bar, or menu (⋮) → Install Ramadan Timer.'
    },
    bn: {
        title: 'রমজান টাইমার',
        ramadanDay: 'রমজান দিন',
        currentTime: 'বর্তমান তারিখ ও সময়',
        nextEvent: 'পরবর্তী ইভেন্ট',
        sehri: 'সাহরী',
        iftar: 'ইফতার',
        sehriTime: 'সাহরীর শেষ সময়',
        iftarTime: 'ইফতারের সময়',
        hours: 'ঘণ্টা',
        minutes: 'মিনিট',
        seconds: 'সেকেন্ড',
        days: 'দিন',
        ramadanEnd: 'রমজান শেষ',
        notInRamadan: 'রমজান নেই',
        toggleFullscreen: 'পূর্ণস্ক্রীন টগল করুন',
        toggleTimeFormat: '১২/২৪ ঘণ্টা ফরম্যাট টগল করুন',
        toggleLanguage: 'ভাষা পরিবর্তন করুন',
        enableNotifications: 'নোটিফিকেশন চালু করুন',
        notificationsEnabled: 'নোটিফিকেশন চালু আছে',
        notifySehri: 'সাহরীর সময় শেষ। খাওয়া বন্ধ করুন।',
        notifyIftar: 'ইফতারের সময়। আপনি রোজা ভাঙতে পারেন।',
        installApp: 'অ্যাপ ইন্সটল করুন',
        installHint: 'অ্যাড্রেস বারে ইন্সটল আইকন (⊕) বা মেনু (⋮) → Install Ramadan Timer ব্যবহার করুন।'
    }
};

// Get translation
function t(key) {
    return translations[currentLanguage][key] || key;
}

function formatTime24h(hours, minutes, seconds) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function formatTime12h(hours, minutes, seconds) {
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${String(displayHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;
}

function formatTime(hours, minutes, seconds) {
    if (timeFormat24h) {
        return formatTime24h(hours, minutes, seconds);
    } else {
        return formatTime12h(hours, minutes, seconds);
    }
}

// Convert time string (HH:MM) to 12h or 24h format
function formatTimeString(timeString) {
    if (!timeString || timeString === '-') {
        return timeString;
    }
    
    const [hours, minutes] = timeString.split(':').map(Number);
    
    if (timeFormat24h) {
        // Return as 24h format (HH:MM)
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    } else {
        // Convert to 12h format (HH:MM AM/PM)
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        return `${String(displayHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
    }
}

// Format date in a readable format
function formatDate(date) {
    const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 
                          'July', 'August', 'September', 'October', 'November', 'December'];
    const monthNamesBn = ['জানুয়ারী', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 
                          'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    if (currentLanguage === 'bn') {
        return `${day} ${monthNamesBn[month]}, ${year}`;
    } else {
        return `${monthNamesEn[month]} ${day}, ${year}`;
    }
}

// Find today's schedule
function getTodaySchedule() {
    const currentDate = getCurrentDate();
    return ramadanSchedule.find(schedule => schedule.date === currentDate);
}

// Find next day's schedule
function getNextDaySchedule() {
    const currentDate = getCurrentDate();
    const currentIndex = ramadanSchedule.findIndex(schedule => schedule.date === currentDate);
    
    if (currentIndex === -1) {
        // If today is not in Ramadan, find the first day
        return ramadanSchedule[0];
    }
    
    if (currentIndex < ramadanSchedule.length - 1) {
        return ramadanSchedule[currentIndex + 1];
    }
    
    // If it's the last day, return null
    return null;
}

// Find the next event based on current Ramadan day
// Returns: { event: Date, name: string, nameKey: string, schedule: object }
function findNextEvent() {
    const now = getBangladeshTime();
    const todaySchedule = getTodaySchedule();
    const nextDaySchedule = getNextDaySchedule();
    
    // If we're in Ramadan
    if (todaySchedule) {
        const todayIftar = timeToDate(todaySchedule.iftar, todaySchedule.date);
        
        // If current time is before Iftar, show countdown to Iftar
        if (now < todayIftar) {
            return {
                event: todayIftar,
                name: 'ইফতার',
                nameKey: 'iftar',
                schedule: todaySchedule
            };
        } else {
            // Iftar is over, show countdown to next day's Sehri
            if (nextDaySchedule) {
                const nextSehri = timeToDate(nextDaySchedule.sehri, nextDaySchedule.date);
                return {
                    event: nextSehri,
                    name: 'সাহরী',
                    nameKey: 'sehri',
                    schedule: nextDaySchedule
                };
            } else {
                // Last day of Ramadan, Iftar is over
                return {
                    event: null,
                    name: 'রমজান শেষ',
                    nameKey: 'ramadanEnd',
                    schedule: todaySchedule
                };
            }
        }
    } else {
        // Not in Ramadan
        return {
            event: null,
            name: 'রমজান নেই',
            nameKey: 'notInRamadan',
            schedule: null
        };
    }
}

// Convert time string (HH:MM) to Date object for today (using Bangladesh time)
function timeToDate(timeString, dateString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    // Parse date string
    const [year, month, day] = dateString.split('-').map(Number);
    // Create a date object representing the Bangladesh time
    // Bangladesh is UTC+6, so to get a Date that represents Bangladesh time:
    // We create a UTC date that is 6 hours earlier, so when JavaScript converts it
    // to Bangladesh time (adds 6 hours), we get the correct time
    const bangladeshOffset = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
    // Create UTC date for the given date and time
    const utcDate = new Date(Date.UTC(year, month - 1, day, hours, minutes, 0, 0));
    // Subtract 6 hours so that when converted to Bangladesh time (UTC+6), it shows correctly
    const date = new Date(utcDate.getTime() - bangladeshOffset);
    return date;
}

// Calculate time difference in milliseconds
function getTimeDifference(targetDate) {
    const now = getBangladeshTime();
    return targetDate - now;
}

// Format time difference to days, hours, minutes, seconds
function formatTimeDifference(ms) {
    if (ms <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return { days, hours, minutes, seconds };
}

// --- Notifications & Adhan ---
function requestNotificationPermission() {
    if (!('Notification' in window)) return Promise.resolve(false);
    if (Notification.permission === 'granted') return Promise.resolve(true);
    if (Notification.permission === 'denied') return Promise.resolve(false);
    return Notification.requestPermission().then(p => p === 'granted');
}

function showNotification(title, body) {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    try {
        const n = new Notification(title, {
            body,
            icon: 'favicon.svg',
            tag: 'ramadan-timer',
            requireInteraction: false
        });
        n.onclick = () => { n.close(); window.focus(); };
    } catch (e) { console.warn('Notification failed:', e); }
}

function playAdhan(type) {
    const src = type === 'fajr' ? ADHAN_FAJR_SRC : ADHAN_IFTAR_SRC;
    let audio = type === 'fajr' ? adhanFajr : adhanIftar;
    if (!audio) {
        audio = new Audio(src);
        if (type === 'fajr') adhanFajr = audio; else adhanIftar = audio;
        audio.onerror = function () {
            var currentSrc = (this.src || '').split('?')[0];
            if (currentSrc.endsWith(src) || currentSrc === src) {
                this.src = ADHAN_FALLBACK_URL;
                this.oncanplaythrough = function () { this.play().catch(function () {}); };
                this.load();
            }
        };
    }
    audio.currentTime = 0;
    audio.play().catch(function () {});
}

function checkAndTriggerNotificationAndAdhan() {
    const todaySchedule = getTodaySchedule();
    if (!todaySchedule) return;
    const now = getBangladeshTime();
    const currentTimeHHMM = getCurrentTime();
    const dateKey = getCurrentDate();

    // Sehri end = Fajr adhan at Sehri time
    if (currentTimeHHMM === todaySchedule.sehri && lastNotifiedSehriKey !== dateKey) {
        lastNotifiedSehriKey = dateKey;
        showNotification(t('title'), t('notifySehri'));
        playAdhan('fajr');
    }

    // Iftar time = Adhan at Iftar
    if (currentTimeHHMM === todaySchedule.iftar && lastNotifiedIftarKey !== dateKey) {
        lastNotifiedIftarKey = dateKey;
        showNotification(t('title'), t('notifyIftar'));
        playAdhan('iftar');
    }
}

// Update the timer display
function updateTimer() {
    try {
        const now = getBangladeshTime();
        const todaySchedule = getTodaySchedule();
        
        // Get all DOM elements
        const systemTimeElement = document.getElementById('system-time');
        const ramadanDayElement = document.getElementById('ramadan-day');
        const sehriTimeElement = document.getElementById('sehri-time');
        const iftarTimeElement = document.getElementById('iftar-time');
        const eventNameElement = document.getElementById('event-name');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        // Check if all elements exist
        if (!systemTimeElement || !ramadanDayElement || !sehriTimeElement || 
            !iftarTimeElement || !eventNameElement || !hoursElement || 
            !minutesElement || !secondsElement) {
            console.error('Some DOM elements are missing');
            return;
        }
        
        // Display current Bangladesh date and time
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const secs = now.getSeconds();
        const formattedTime = formatTime(hours, minutes, secs);
        const formattedDate = formatDate(now);
        systemTimeElement.textContent = `${t('currentTime')}: ${formattedDate} - ${formattedTime}`;
        
        // Find the next event based on current Ramadan day
        const nextEventInfo = findNextEvent();
        const nextEvent = nextEventInfo.event;
        
        // Determine which day's schedule to display
        let displaySchedule = todaySchedule;
        
        if (todaySchedule) {
            // We're in Ramadan
            const todayIftar = timeToDate(todaySchedule.iftar, todaySchedule.date);
            
            // If Iftar has passed, show next day's schedule
            if (now >= todayIftar) {
                const nextDaySchedule = getNextDaySchedule();
                if (nextDaySchedule) {
                    displaySchedule = nextDaySchedule;
                }
            }
            
            // Update display with the determined schedule
            const dayLabel = document.getElementById('ramadan-day-label');
            if (dayLabel) {
                dayLabel.textContent = t('ramadanDay');
            }
            ramadanDayElement.textContent = displaySchedule.day;
            sehriTimeElement.textContent = formatTimeString(displaySchedule.sehri);
            iftarTimeElement.textContent = formatTimeString(displaySchedule.iftar);
        } else {
            // Not in Ramadan
            const dayLabel = document.getElementById('ramadan-day-label');
            if (dayLabel) {
                dayLabel.textContent = t('ramadanDay');
            }
            ramadanDayElement.textContent = '-';
            sehriTimeElement.textContent = '-';
            iftarTimeElement.textContent = '-';
        }

        // Trigger browser notification and adhan at Sehri / Iftar time (once per event per day)
        checkAndTriggerNotificationAndAdhan();
        
        // Update event name using translation key
        if (nextEventInfo.nameKey) {
            eventNameElement.textContent = t(nextEventInfo.nameKey);
        } else {
            eventNameElement.textContent = '-';
        }
        
        // Calculate and display countdown to next event
        if (nextEvent) {
            const timeDiff = getTimeDifference(nextEvent);
            const timeObj = formatTimeDifference(timeDiff);
            
            // Show days if countdown is more than 24 hours
            const daysElement = document.getElementById('days');
            const daysUnit = document.getElementById('days-unit');
            const daysSeparator = document.getElementById('days-separator');
            
            if (timeObj.days > 0) {
                if (daysElement && daysUnit && daysSeparator) {
                    daysElement.textContent = String(timeObj.days).padStart(2, '0');
                    daysUnit.style.display = 'flex';
                    daysSeparator.style.display = 'block';
                }
            } else {
                if (daysUnit && daysSeparator) {
                    daysUnit.style.display = 'none';
                    daysSeparator.style.display = 'none';
                }
            }
            
            hoursElement.textContent = String(timeObj.hours).padStart(2, '0');
            minutesElement.textContent = String(timeObj.minutes).padStart(2, '0');
            secondsElement.textContent = String(timeObj.seconds).padStart(2, '0');
        } else {
            // No upcoming event (not in Ramadan or Ramadan ended)
            const daysElement = document.getElementById('days');
            const daysUnit = document.getElementById('days-unit');
            const daysSeparator = document.getElementById('days-separator');
            
            if (daysUnit && daysSeparator) {
                daysUnit.style.display = 'none';
                daysSeparator.style.display = 'none';
            }
            
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
        }
    } catch (error) {
        console.error('Error updating timer:', error);
    }
}

// Initialize and update timer every second
let timerInterval = null;

function initTimer() {
    console.log('Timer initialized');
    console.log('Current date:', getCurrentDate());
    console.log('Current time:', getCurrentTime());
    
    // Clear any existing interval
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Update immediately
    updateTimer();
    
    // Update every second using system time
    timerInterval = setInterval(() => {
        updateTimer();
    }, 1000);
    
    console.log('Timer started and updating every second');
}

// Fullscreen functionality
function toggleFullscreen() {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    
    if (!document.fullscreenElement && 
        !document.webkitFullscreenElement && 
        !document.mozFullScreenElement && 
        !document.msFullscreenElement) {
        // Enter fullscreen
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
        fullscreenBtn.classList.add('fullscreen-active');
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        fullscreenBtn.classList.remove('fullscreen-active');
    }
}

// Handle fullscreen change events
function handleFullscreenChange() {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const isFullscreen = !!(document.fullscreenElement || 
                           document.webkitFullscreenElement || 
                           document.mozFullScreenElement || 
                           document.msFullscreenElement);
    
    if (isFullscreen) {
        fullscreenBtn.classList.add('fullscreen-active');
    } else {
        fullscreenBtn.classList.remove('fullscreen-active');
    }
}

// Initialize fullscreen button
function initFullscreen() {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
        
        // Listen for fullscreen change events
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    }
}

// Update all text content based on current language
function updateLanguage() {
    // Update page title
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) pageTitle.textContent = t('title');
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update header
    const headerTitle = document.getElementById('header-title');
    const headerSubtitle = document.getElementById('header-subtitle');
    if (headerTitle) headerTitle.textContent = t('title');
    if (headerSubtitle) headerSubtitle.textContent = t('title');
    
    // Update labels
    const ramadanDayLabel = document.getElementById('ramadan-day-label');
    const currentTimeLabel = document.getElementById('current-time-label');
    const eventLabel = document.getElementById('event-label');
    const daysLabel = document.getElementById('days-label');
    const hoursLabel = document.getElementById('hours-label');
    const minutesLabel = document.getElementById('minutes-label');
    const secondsLabel = document.getElementById('seconds-label');
    const sehriLabel = document.getElementById('sehri-label');
    const iftarLabel = document.getElementById('iftar-label');
    
    if (ramadanDayLabel) ramadanDayLabel.textContent = t('ramadanDay');
    if (currentTimeLabel) currentTimeLabel.textContent = t('currentTime');
    if (eventLabel) eventLabel.textContent = t('nextEvent');
    if (daysLabel) daysLabel.textContent = t('days');
    if (hoursLabel) hoursLabel.textContent = t('hours');
    if (minutesLabel) minutesLabel.textContent = t('minutes');
    if (secondsLabel) secondsLabel.textContent = t('seconds');
    if (sehriLabel) sehriLabel.textContent = t('sehriTime') + ':';
    if (iftarLabel) iftarLabel.textContent = t('iftarTime') + ':';
    
    // Update button titles and aria-labels
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const timeFormatBtn = document.getElementById('time-format-btn');
    const languageBtn = document.getElementById('language-btn');
    
    if (fullscreenBtn) {
        fullscreenBtn.title = t('toggleFullscreen');
        fullscreenBtn.setAttribute('aria-label', t('toggleFullscreen'));
    }
    if (timeFormatBtn) {
        timeFormatBtn.title = t('toggleTimeFormat');
        timeFormatBtn.setAttribute('aria-label', t('toggleTimeFormat'));
    }
    if (languageBtn) {
        languageBtn.title = t('toggleLanguage');
        languageBtn.setAttribute('aria-label', t('toggleLanguage'));
    }
    const notifyBtn = document.getElementById('notify-btn');
    if (notifyBtn) {
        notifyBtn.title = Notification.permission === 'granted' ? t('notificationsEnabled') : t('enableNotifications');
        notifyBtn.setAttribute('aria-label', notifyBtn.title);
    }
    var installBtn = document.getElementById('install-btn');
    if (installBtn) {
        installBtn.title = t('installApp');
        installBtn.setAttribute('aria-label', t('installApp'));
    }
    // Update event names and other dynamic content
    updateTimer();
    
    // Update calendar if modal is open
    const modal = document.getElementById('calendar-modal');
    if (modal && modal.classList.contains('active')) {
        initCalendar();
    }
    
    // Update calendar title
    const calendarTitle = document.getElementById('calendar-title');
    if (calendarTitle) {
        calendarTitle.textContent = currentLanguage === 'en' 
            ? 'Ramadan Calendar 2026'
            : 'রমজান ক্যালেন্ডার ২০২৬';
    }
}

// Initialize language button
function initLanguage() {
    // Load saved preference from cookie
    const savedLanguage = getCookie('language');
    if (savedLanguage === 'bn' || savedLanguage === 'en') {
        currentLanguage = savedLanguage;
    } else {
        currentLanguage = 'en'; // Default to English
    }
    
    const languageBtn = document.getElementById('language-btn');
    const languageText = document.getElementById('language-text');
    
    if (languageBtn && languageText) {
        // Update button text and active state based on current language
        updateLanguageButton();
        
        // Update all text content
        updateLanguage();
        
        // Toggle language on click
        languageBtn.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
            
            // Save preference to cookie (expires in 365 days)
            setCookie('language', currentLanguage, 365);
            
            // Update button state
            updateLanguageButton();
            
            // Update all text content
            updateLanguage();
        });
    }
}

// Update language button visual state
function updateLanguageButton() {
    const languageBtn = document.getElementById('language-btn');
    const languageText = document.getElementById('language-text');
    
    if (languageBtn && languageText) {
        languageText.textContent = currentLanguage.toUpperCase();
    }
}

// Initialize time format button
function initTimeFormat() {
    // Load saved preference from cookie
    const savedFormat = getCookie('timeFormat');
    if (savedFormat === '12h') {
        timeFormat24h = false;
    } else if (savedFormat === '24h') {
        timeFormat24h = true;
    }
    
    const timeFormatBtn = document.getElementById('time-format-btn');
    const timeFormatText = document.getElementById('time-format-text');
    
    if (timeFormatBtn && timeFormatText) {
        // Update button text and active state based on current format
        updateTimeFormatButton();
        
        // Toggle time format on click
        timeFormatBtn.addEventListener('click', () => {
            timeFormat24h = !timeFormat24h;
            
            // Save preference to cookie (expires in 365 days)
            setCookie('timeFormat', timeFormat24h ? '24h' : '12h', 365);
            
            // Update button state
            updateTimeFormatButton();
            
            // Update display immediately
            updateTimer();
        });
    }
}

// Update time format button visual state
function updateTimeFormatButton() {
    const timeFormatBtn = document.getElementById('time-format-btn');
    const timeFormatText = document.getElementById('time-format-text');
    
    if (timeFormatBtn && timeFormatText) {
        timeFormatText.textContent = timeFormat24h ? '24h' : '12h';
    }
}

// Initialize and render Ramadan calendar
function initCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    if (!calendarGrid) return;
    
    // Clear existing content
    calendarGrid.innerHTML = '';
    
    // Create header row
    const headerRow = document.createElement('div');
    headerRow.className = 'calendar-header';
    const headers = currentLanguage === 'en' 
        ? ['Day', 'Date', 'Sehri', 'Iftar']
        : ['দিন', 'তারিখ', 'সাহরী', 'ইফতার'];
    
    headers.forEach(header => {
        const headerCell = document.createElement('div');
        headerCell.className = 'calendar-header-cell';
        headerCell.textContent = header;
        headerRow.appendChild(headerCell);
    });
    calendarGrid.appendChild(headerRow);
    
    // Get current date and determine which day to highlight (matching main screen logic)
    const now = getBangladeshTime();
    const currentDate = getCurrentDate();
    const todaySchedule = ramadanSchedule.find(schedule => schedule.date === currentDate);
    
    // Determine which day to highlight based on main screen logic
    let highlightDate = currentDate;
    if (todaySchedule) {
        const todayIftar = timeToDate(todaySchedule.iftar, todaySchedule.date);
        // If Iftar has passed, highlight next day
        if (now >= todayIftar) {
            const nextDaySchedule = ramadanSchedule.find(schedule => {
                const scheduleDate = new Date(schedule.date);
                const todayDate = new Date(currentDate);
                return scheduleDate > todayDate;
            });
            if (nextDaySchedule) {
                highlightDate = nextDaySchedule.date;
            }
        }
    }
    
    // Create rows for each day
    ramadanSchedule.forEach(day => {
        const row = document.createElement('div');
        row.className = 'calendar-row';
        if (day.date === highlightDate) {
            row.classList.add('current-day-row');
        }
        
        // Day number
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-cell day-cell';
        dayCell.textContent = day.day;
        row.appendChild(dayCell);
        
        // Date
        const dateCell = document.createElement('div');
        dateCell.className = 'calendar-cell date-cell';
        const dateObj = new Date(day.date);
        const monthNames = currentLanguage === 'en' 
            ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            : ['জানু', 'ফেব্রু', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্ট', 'অক্টো', 'নভে', 'ডিসে'];
        dateCell.textContent = `${dateObj.getDate()} ${monthNames[dateObj.getMonth()]}`;
        row.appendChild(dateCell);
        
        // Sehri time
        const sehriCell = document.createElement('div');
        sehriCell.className = 'calendar-cell time-cell';
        sehriCell.textContent = formatTimeString(day.sehri);
        row.appendChild(sehriCell);
        
        // Iftar time
        const iftarCell = document.createElement('div');
        iftarCell.className = 'calendar-cell time-cell';
        iftarCell.textContent = formatTimeString(day.iftar);
        row.appendChild(iftarCell);
        
        calendarGrid.appendChild(row);
    });
}

// Calendar modal functions
function openCalendarModal() {
    const modal = document.getElementById('calendar-modal');
    if (modal) {
        initCalendar(); // Refresh calendar data
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCalendarModal() {
    const modal = document.getElementById('calendar-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize calendar button
function initCalendarButton() {
    const calendarBtn = document.getElementById('calendar-btn');
    const modalClose = document.getElementById('modal-close');
    const modal = document.getElementById('calendar-modal');
    
    if (calendarBtn) {
        calendarBtn.addEventListener('click', openCalendarModal);
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeCalendarModal);
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeCalendarModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCalendarModal();
        }
    });
}

// Initialize notifications button
function initNotifications() {
    const notifyBtn = document.getElementById('notify-btn');
    if (!notifyBtn) return;
    const updateNotifyButton = () => {
        notifyBtn.title = Notification.permission === 'granted' ? t('notificationsEnabled') : t('enableNotifications');
        notifyBtn.setAttribute('aria-label', notifyBtn.title);
        notifyBtn.classList.toggle('notify-enabled', Notification.permission === 'granted');
    };
    updateNotifyButton();
    notifyBtn.addEventListener('click', () => {
        requestNotificationPermission().then((granted) => {
            updateNotifyButton();
        });
    });
}

// PWA install button
var deferredInstallPrompt = null;

function initInstallButton() {
    var installBtn = document.getElementById('install-btn');
    if (!installBtn) return;

    function setInstallButtonLabel() {
        installBtn.title = t('installApp');
        installBtn.setAttribute('aria-label', t('installApp'));
    }
    setInstallButtonLabel();

    window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        deferredInstallPrompt = e;
    });

    installBtn.addEventListener('click', function () {
        if (deferredInstallPrompt) {
            deferredInstallPrompt.prompt();
            deferredInstallPrompt.userChoice.then(function (choice) {
                if (choice.outcome === 'accepted') installBtn.style.display = 'none';
                deferredInstallPrompt = null;
            });
        } else {
            showInstallHint();
        }
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {
        installBtn.style.display = 'none';
    }
}

function showInstallHint() {
    var hint = t('installHint');
    var el = document.getElementById('install-hint-toast');
    if (el) el.remove();
    el = document.createElement('div');
    el.id = 'install-hint-toast';
    el.className = 'install-hint-toast';
    el.textContent = hint;
    document.body.appendChild(el);
    setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
    }, 6000);
}

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function () {});
    });
}

// Start the timer when page loads (using system datetime)
// This ensures the timer starts right away using the system's current date and time
(function() {
    console.log('Script loaded, DOM ready state:', document.readyState);
    
    function startTimer() {
        // Double check DOM is ready
        if (document.getElementById('hours') && document.getElementById('minutes')) {
            initLanguage(); // Initialize language first
            initTimer();
            initFullscreen();
            initTimeFormat();
            initCalendarButton();
            initNotifications();
            initInstallButton();
        } else {
            // Retry after a short delay
            setTimeout(startTimer, 50);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startTimer);
    } else {
        // DOM is already loaded, start immediately
        startTimer();
    }
})();
