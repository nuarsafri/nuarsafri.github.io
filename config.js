/**
 * MAJLIS KESYUKURAN - INVITATION CONFIGURATION
 * Anda boleh mengubah semua maklumat majlis di sini dengan mudah.
 */
window.INVITATION_CONFIG = {
  // Maklumat Asas Majlis
  eventType: "Majlis Kesyukuran",
  eventSubtitle: "Sempena Perkahwinan",
  eventCategory: "Menyambut Menantu",
  
  // Tuan Rumah / Ibu Bapa
  hosts: {
    father: "HJ HASHIM BIN HJ MAIN",
    mother: "HJH FAUZIAH BINTI HJ ASIROP",
    familySuffix: "sekeluarga",
    invitationGreeting: "Dengan penuh rasa syukur, kami sekeluarga menjemput anda untuk bersama-sama meraikan hari istimewa kami.",
    invitationNotice: "Dengan segala hormatnya menjemput anda ke majlis kesyukuran sempena perkahwinan"
  },

  // Pengantin
  couple: {
    groom: "Hafizzuddin Fakhrul",
    groomShort: "Hafizzuddin",
    groomInitials: "H",
    bride: "Rabiatul Adawiyah",
    brideShort: "Adawiyah",
    brideInitials: "R",
    monogram: "H & R",
    quote: "“Dua hati, satu perjalanan, dan sebuah permulaan yang diraikan bersama.”",
    badgeDate: "24 • 10 • 2026"
  },

  // Tarikh & Masa Majlis
  date: {
    dayMalay: "Sabtu",
    dayEnglish: "SATURDAY",
    dayNumber: 24,
    monthMalay: "Oktober",
    monthEnglish: "OCTOBER",
    year: 2026,
    timeRange: "11.00 Pagi — 4.00 Petang",
    displayDateBadge: "24 • 10 • 2026",
    displayFullDate: "Sabtu, 24 Oktober 2026",
    // Format ISO untuk Countdown (Tahun, Bulan-1, Hari, Jam, Minit)
    countdownTarget: "2026-10-24T11:00:00"
  },

  // Tentatif Acara (Maklumat Majlis)
  schedule: [
    {
      time: "11.00 Pagi",
      title: "Ketibaan Tetamu",
      description: "Ketibaan para jemputan dan tetamu kehormat"
    },
    {
      time: "12.30 Tengah Hari",
      title: "Ketibaan Pengantin",
      description: "Perarakan masuk pasangan mempelai"
    },
    {
      time: "1.00 Petang",
      title: "Jamuan & Sesi Bersama Pengantin",
      description: "Jamuan makan tengah hari & sesi beramah mesra"
    },
    {
      time: "4.00 Petang",
      title: "Majlis Bersurai",
      description: "Ucapan terima kasih dan majlis bersurai"
    }
  ],

  // Lokasi Majlis
  venue: {
    name: "Limas D'kantan",
    address: "Lot 3603 Kg Teluk Berembang, Lubok China, Malacca City, Malaysia",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Limas+D%27kantan+lot+3603+kg+teluk+berembang+lubok+china+Melaka",
    wazeUrl: "https://waze.com/ul?q=Limas%20D%27kantan%20Lubok%20China%20Melaka&navigate=yes",
    locationNote: "Use Waze to drive to Limas D'kantan, Lubok China, Melaka"
  },

  // Hubungi (Contacts)
  contacts: [
    {
      name: "Hafizzudin",
      role: "Pengantin / Wakil",
      phoneDisplay: "012 270 2737",
      phoneRaw: "60122702737",
      whatsappMessage: "Salam Hafizzudin, saya ingin bertanya tentang Majlis Kesyukuran pada 24 Oktober 2026."
    },
    {
      name: "Hj Hashim",
      role: "Tuan Rumah / Bapa",
      phoneDisplay: "+60 13 687 0656",
      phoneRaw: "60136870656",
      whatsappMessage: "Salam Tuan Haji Hashim, saya ingin bertanya tentang Majlis Kesyukuran pada 24 Oktober 2026."
    }
  ],

  // RSVP Settings
  rsvp: {
    targetWhatsApp: "60122702737", // Default nombor WhatsApp penerima RSVP
    secondaryWhatsApp: "60136870656",
    deadline: "17 Oktober 2026"
  },

  // Firebase Firestore Configuration
  // Untuk menyimpan maklumat kehadiran tetamu secara online di Firebase:
  // 1. Cipta projek di https://console.firebase.google.com/
  // 2. Aktifkan Cloud Firestore Database (dalam mod test atau production rules)
  // 3. Masukkan kunci konfigurasi web app anda di bawah:
  firebaseConfig: {
    apiKey: "AIzaSyCMU1ua6rMA5VToNx8AjCMD0dJpmdfpCps",
    authDomain: "nuaa-ecfe6.firebaseapp.com",
    projectId: "nuaa-ecfe6",
    storageBucket: "nuaa-ecfe6.firebasestorage.app",
    messagingSenderId: "142616207983",
    appId: "1:142616207983:web:0fc889f33a86c072e0e39a",
    measurementId: "G-PQ21L172QQ"
  },

  // Ucapan Penutup (Terima Kasih)
  closing: {
    title: "Terima Kasih",
    subtitle: "Kehadiran & Doa Restu Anda Amat Bermakna Buat Kami",
    blessingText: "Semoga dengan kehadiran anda dapat menyerikan lagi majlis ini.",
    signature: "HJ HASHIM BIN MAIN & HJH FAUZIAH BINTI ASIROP sekeluarga"
  }
};
