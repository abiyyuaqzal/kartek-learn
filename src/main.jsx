import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  LayoutDashboard, BookOpen, ClipboardList, Users, GraduationCap, Settings,
  Bell, Search, ChevronDown, LogOut, Menu, X, Clock3, TrendingUp, CircleCheck,
  PlayCircle, FileText, CalendarDays, Award, UserRoundCog, Plus, MoreHorizontal,
  ArrowRight, CheckCircle2, Circle, BarChart3, School, Sparkles, ChevronRight,
  BookMarked, UserCheck, Layers3, ShieldCheck, Presentation, ListChecks, Upload,
  MessageSquareText, Eye, Pencil, Trash2
} from 'lucide-react';
import './styles.css';

const demoUsers = {
  admin: { id: 1, name: 'Admin', email: 'admin@demo.com', role: 'admin', avatar: 'AD', title: 'Administrator' },
  teacher: { id: 2, name: 'Ramadhan Eka', email: 'ramadhan@demo.com', role: 'teacher', avatar: 'RE', title: 'Guru Matematika' },
  student: { id: 3, name: 'Aqzal', email: 'aqzal@demo.com', role: 'student', avatar: 'AQ', title: 'Kelas 10-A' }
};

const courses = [
  { id: 'math', title: 'Matematika', code: 'MAT-10A', teacher: 'Ramadhan Eka', className: 'Kelas 10-A', students: 32, progress: 74, lessons: 18, completed: 13, accent: 'violet', description: 'Aljabar, fungsi, persamaan kuadrat, dan pengantar statistika.', next: 'Persamaan Kuadrat' },
  { id: 'english', title: 'English Language', code: 'ENG-10A', teacher: 'Sarah Wijaya', className: 'Kelas 10-A', students: 32, progress: 48, lessons: 16, completed: 8, accent: 'blue', description: 'Reading, writing, grammar, dan conversation.', next: 'Narrative Text' },
  { id: 'cs', title: 'Computer Science', code: 'CS-10A', teacher: 'Rizky Ananda', className: 'Kelas 10-A', students: 28, progress: 61, lessons: 14, completed: 9, accent: 'emerald', description: 'Dasar algoritma, logika pemrograman, dan web.', next: 'Flowchart & Algorithm' },
  { id: 'physics', title: 'Fisika', code: 'FIS-10A', teacher: 'Dina Maharani', className: 'Kelas 10-A', students: 30, progress: 36, lessons: 20, completed: 7, accent: 'orange', description: 'Gerak, gaya, energi, dan pengukuran.', next: 'Hukum Newton' }
];

const courseModules = {
  math: [
    { title: 'Module 1 · Algebra Dasar', progress: 100, lessons: [
      { id: 'math-1', title: 'Pengenalan Aljabar', type: 'Materi', duration: '12 menit', done: true,
        lead: 'Aljabar membantu kita menuliskan pola dan hubungan menggunakan simbol atau huruf.',
        paragraphs: ['Dalam bentuk 3x + 5, huruf x disebut variabel, angka 3 adalah koefisien, dan 5 adalah konstanta. Nilai suatu bentuk aljabar dapat dihitung jika nilai variabelnya diketahui.'],
        bullets: ['Variabel: simbol yang nilainya dapat berubah, misalnya x atau y.', 'Koefisien: angka yang mengalikan variabel.', 'Konstanta: nilai tetap tanpa variabel.'],
        example: { title: 'Contoh', lines: ['Jika x = 4, maka 3x + 5 = 3(4) + 5 = 17.', 'Suku sejenis dapat dijumlahkan: 2x + 5x = 7x.'] },
        exercise: ['Sebutkan variabel, koefisien, dan konstanta dari 4y - 7.', 'Sederhanakan 3a + 2a - 4.'] },
      { id: 'math-2', title: 'Persamaan Linear', type: 'Video', duration: '18 menit', done: true,
        lead: 'Persamaan linear adalah persamaan dengan pangkat tertinggi variabel sama dengan satu.',
        paragraphs: ['Tujuan menyelesaikan persamaan adalah menemukan nilai variabel yang membuat kedua ruas bernilai sama. Operasi yang dilakukan pada satu ruas harus dilakukan pula pada ruas lainnya.'],
        bullets: ['Pindahkan konstanta dengan operasi kebalikan.', 'Sederhanakan kedua ruas.', 'Periksa jawaban dengan substitusi.'],
        example: { title: 'Contoh: 2x + 6 = 18', lines: ['2x = 18 - 6', '2x = 12', 'x = 6', 'Cek: 2(6) + 6 = 18 ✓'] },
        exercise: ['Selesaikan 3x + 4 = 19.', 'Selesaikan 5x - 10 = 20.'] },
      { id: 'math-3', title: 'Latihan Persamaan Linear', type: 'Quiz', duration: '10 soal', done: true,
        lead: 'Uji pemahamanmu tentang persamaan linear satu variabel.',
        quiz: [
          { q: 'Jika 2x + 4 = 14, nilai x adalah ...', options: ['3', '5', '7', '9'], answer: '5' },
          { q: 'Penyelesaian dari 4x - 8 = 12 adalah ...', options: ['4', '5', '6', '8'], answer: '5' },
          { q: 'Manakah yang merupakan persamaan linear?', options: ['x² + 2 = 0', '3x + 2 = 11', '1/x = 2', 'x³ = 8'], answer: '3x + 2 = 11' }
        ] },
    ]},
    { title: 'Module 2 · Persamaan Kuadrat', progress: 50, lessons: [
      { id: 'math-4', title: 'Konsep Persamaan Kuadrat', type: 'Materi', duration: '15 menit', done: true,
        lead: 'Persamaan kuadrat memiliki bentuk umum ax² + bx + c = 0 dengan a ≠ 0.',
        paragraphs: ['Nilai a, b, dan c menentukan bentuk persamaan. Akar persamaan kuadrat adalah nilai x yang membuat persamaan bernilai nol.'],
        bullets: ['Bentuk umum: ax² + bx + c = 0.', 'Diskriminan D = b² - 4ac.', 'D > 0: dua akar real; D = 0: satu akar kembar; D < 0: tidak ada akar real.'],
        example: { title: 'Contoh', lines: ['x² - 5x + 6 = 0', '(x - 2)(x - 3) = 0', 'Akar: x = 2 atau x = 3'] },
        exercise: ['Tentukan a, b, c dari 2x² + 3x - 5 = 0.', 'Hitung diskriminan x² + 4x + 4 = 0.'] },
      { id: 'math-5', title: 'Faktorisasi', type: 'Video', duration: '21 menit', done: false, current: true,
        lead: 'Faktorisasi mengubah bentuk penjumlahan menjadi perkalian faktor-faktor yang lebih sederhana.',
        paragraphs: ['Untuk x² + bx + c, carilah dua bilangan yang jumlahnya b dan hasil kalinya c. Cara ini efektif saat persamaan memiliki faktor bulat sederhana.'],
        bullets: ['Cari pasangan faktor dari konstanta c.', 'Pastikan jumlah pasangan sama dengan koefisien b.', 'Tuliskan dalam bentuk (x + p)(x + q).'],
        example: { title: 'Contoh: x² + 7x + 12', lines: ['Faktor 12 yang jumlahnya 7 adalah 3 dan 4.', 'x² + 7x + 12 = (x + 3)(x + 4).'] },
        exercise: ['Faktorkan x² + 9x + 20.', 'Faktorkan x² - x - 12.'] },
      { id: 'math-6', title: 'Tugas Persamaan Kuadrat', type: 'Assignment', duration: 'Deadline 20 Agu', done: false,
        lead: 'Kerjakan soal berikut pada kertas atau dokumen digital dan tuliskan langkah penyelesaiannya.',
        bullets: ['Selesaikan x² - 7x + 12 = 0 dengan faktorisasi.', 'Selesaikan 2x² - 8x = 0.', 'Tentukan jenis akar dari x² + 2x + 5 = 0 menggunakan diskriminan.', 'Tuliskan satu contoh masalah sehari-hari yang dapat dimodelkan dengan persamaan kuadrat.'],
        note: 'Bobot: 20% · Penilaian mencakup ketepatan jawaban, langkah pengerjaan, dan kerapian.' },
    ]},
    { title: 'Module 3 · Fungsi', progress: 0, lessons: [
      { id: 'math-7', title: 'Pengertian Fungsi', type: 'Materi', duration: '10 menit', done: false,
        lead: 'Fungsi memasangkan setiap elemen domain dengan tepat satu elemen kodomain.',
        paragraphs: ['Notasi f(x) menyatakan nilai fungsi untuk input x. Misalnya f(x)=2x+1, maka f(3)=7.'],
        bullets: ['Domain: himpunan nilai input.', 'Kodomain: himpunan tujuan.', 'Range: nilai output yang benar-benar dihasilkan.'],
        example: { title: 'Contoh', lines: ['f(x) = 2x + 1', 'f(5) = 2(5) + 1 = 11'] } },
      { id: 'math-8', title: 'Grafik Fungsi', type: 'Video', duration: '17 menit', done: false,
        lead: 'Grafik fungsi membantu melihat hubungan antara nilai x dan f(x) secara visual.',
        bullets: ['Buat tabel beberapa nilai x.', 'Hitung f(x) untuk setiap x.', 'Plot titik (x, f(x)) lalu hubungkan sesuai bentuk fungsi.'] },
      { id: 'math-9', title: 'Quiz Fungsi', type: 'Quiz', duration: '12 soal', done: false,
        lead: 'Mini quiz fungsi untuk memastikan konsep dasar sudah kuat.',
        quiz: [{ q: 'Jika f(x)=3x-2, maka f(4)=...', options: ['8','10','12','14'], answer: '10' }, { q: 'Pada fungsi, himpunan input disebut...', options: ['Range','Domain','Kodomain','Grafik'], answer: 'Domain' }] }
    ]}
  ],
  english: [
    { title: 'Module 1 · Narrative Text', progress: 70, lessons: [
      { id: 'eng-1', title: 'What is Narrative Text?', type: 'Materi', duration: '10 menit', done: true, lead: 'Narrative text tells a sequence of events with characters, conflict, and resolution.', bullets: ['Orientation introduces characters and setting.', 'Complication presents the main problem.', 'Resolution shows how the problem is solved.'], example: { title: 'Mini example', lines: ['Orientation: A farmer lived near a forest.', 'Complication: His only cow went missing.', 'Resolution: He followed the tracks and found it near a river.'] } },
      { id: 'eng-2', title: 'Simple Past Tense', type: 'Materi', duration: '14 menit', done: true, lead: 'Narrative texts commonly use the simple past tense to describe completed events.', bullets: ['Regular verbs: play → played.', 'Irregular verbs: go → went, see → saw.', 'Use did/did not for questions and negatives.'], exercise: ['Change to past tense: “They visit the museum.”', 'Write one negative sentence using did not.'] },
      { id: 'eng-3', title: 'Reading: The Clever Deer', type: 'Quiz', duration: '8 soal', done: false, current: true, lead: 'Read a short narrative and identify its structure.', quiz: [{ q: 'Which part introduces the setting and characters?', options: ['Orientation','Complication','Resolution','Coda'], answer: 'Orientation' }, { q: 'Which tense is most commonly used in narrative text?', options: ['Present continuous','Simple past','Future','Present perfect'], answer: 'Simple past' }] }
    ]},
    { title: 'Module 2 · Writing Practice', progress: 25, lessons: [
      { id: 'eng-4', title: 'Building a Story Outline', type: 'Materi', duration: '12 menit', done: false, lead: 'A simple outline keeps a story focused before you start writing.', bullets: ['Who is the main character?', 'Where and when does the story happen?', 'What problem happens?', 'How is the problem solved?'] },
      { id: 'eng-5', title: 'Narrative Essay', type: 'Assignment', duration: 'Deadline 22 Agu', done: false, lead: 'Write a 250–300 word narrative about an unexpected experience.', note: 'Use orientation, complication, and resolution. Include at least five simple-past verbs.' }
    ]}
  ],
  cs: [
    { title: 'Module 1 · Computational Thinking', progress: 80, lessons: [
      { id: 'cs-1', title: 'Apa itu Algoritma?', type: 'Materi', duration: '9 menit', done: true, lead: 'Algoritma adalah urutan langkah logis dan terhingga untuk menyelesaikan sebuah masalah.', bullets: ['Langkah harus jelas.', 'Urutan langkah berpengaruh terhadap hasil.', 'Algoritma harus berhenti setelah sejumlah langkah.'], example: { title: 'Contoh algoritma membuat teh', lines: ['Siapkan gelas dan teh.', 'Panaskan air.', 'Tuang air ke gelas.', 'Tambahkan gula bila perlu.'] } },
      { id: 'cs-2', title: 'Flowchart & Simbol Dasar', type: 'Materi', duration: '13 menit', done: true, lead: 'Flowchart menggambarkan alur algoritma menggunakan simbol.', bullets: ['Oval: Start/End.', 'Persegi panjang: Process.', 'Belah ketupat: Decision.', 'Panah: arah alur.'] },
      { id: 'cs-3', title: 'Quiz Algoritma', type: 'Quiz', duration: '10 soal', done: false, quiz: [{ q: 'Simbol decision pada flowchart berbentuk...', options: ['Oval','Persegi panjang','Belah ketupat','Lingkaran'], answer: 'Belah ketupat' }, { q: 'Algoritma yang baik harus...', options: ['Tidak berakhir','Memiliki langkah jelas','Selalu panjang','Tanpa urutan'], answer: 'Memiliki langkah jelas' }] }
    ]},
    { title: 'Module 2 · Web Basics', progress: 40, lessons: [
      { id: 'cs-4', title: 'HTML: Struktur Halaman', type: 'Materi', duration: '15 menit', done: false, current: true, lead: 'HTML memberi struktur pada halaman web menggunakan elemen seperti heading, paragraph, link, dan image.', example: { title: 'Contoh struktur', lines: ['<h1>Judul Halaman</h1>', '<p>Ini paragraf pertama.</p>', '<a href="#">Baca selengkapnya</a>'] }, bullets: ['Gunakan heading secara berurutan.', 'Pisahkan struktur (HTML) dan tampilan (CSS).', 'Gunakan elemen semantik bila memungkinkan.'] },
      { id: 'cs-5', title: 'Flowchart Sederhana', type: 'Assignment', duration: 'Deadline 24 Agu', done: false, lead: 'Buat flowchart proses login sederhana.', bullets: ['Mulai dari input username dan password.', 'Tambahkan decision untuk memeriksa kecocokan data.', 'Buat jalur berhasil dan gagal.', 'Akhiri setiap jalur dengan End.'] }
    ]}
  ],
  physics: [
    { title: 'Module 1 · Pengukuran & Gerak', progress: 65, lessons: [
      { id: 'phy-1', title: 'Besaran dan Satuan SI', type: 'Materi', duration: '11 menit', done: true, lead: 'Fisika menggunakan besaran yang terukur dan satuan baku agar hasil dapat dibandingkan.', bullets: ['Panjang: meter (m).', 'Massa: kilogram (kg).', 'Waktu: sekon (s).', 'Suhu: kelvin (K).'] },
      { id: 'phy-2', title: 'Gerak Lurus Beraturan', type: 'Materi', duration: '16 menit', done: true, lead: 'Pada GLB, benda bergerak dengan kecepatan tetap sehingga percepatannya nol.', example: { title: 'Rumus utama', lines: ['v = s / t', 's = v × t', 'Jika v = 10 m/s selama 5 s, maka s = 50 m.'] }, exercise: ['Mobil menempuh 120 m dalam 10 s. Berapa kecepatannya?'] }
    ]},
    { title: 'Module 2 · Gaya dan Hukum Newton', progress: 35, lessons: [
      { id: 'phy-3', title: 'Hukum Newton I', type: 'Materi', duration: '12 menit', done: false, lead: 'Benda mempertahankan keadaan diam atau gerak lurus beraturan jika resultan gaya yang bekerja padanya nol.', bullets: ['Disebut juga hukum kelembaman atau inersia.', 'ΣF = 0 berarti percepatan a = 0.'] },
      { id: 'phy-4', title: 'Hukum Newton II', type: 'Video', duration: '18 menit', done: false, current: true, lead: 'Percepatan benda sebanding dengan resultan gaya dan berbanding terbalik dengan massanya.', example: { title: 'Rumus', lines: ['ΣF = m × a', 'Gaya 20 N pada massa 4 kg menghasilkan a = 5 m/s².'] } },
      { id: 'phy-5', title: 'Latihan Hukum Newton', type: 'Assignment', duration: 'Selesai', done: true, lead: 'Latihan penerapan resultan gaya dan percepatan.', note: 'Nilai Aqzal: 88/100 · Feedback: konsep sudah baik, perhatikan satuan pada jawaban akhir.' }
    ]}
  ]
};

const assignments = [
  { id: 1, title: 'Tugas Persamaan Kuadrat', course: 'Matematika', due: '20 Agu 2026', status: 'Belum dikumpulkan', score: null, urgency: '2 hari lagi' },
  { id: 2, title: 'Narrative Essay', course: 'English Language', due: '22 Agu 2026', status: 'Belum dikumpulkan', score: null, urgency: '4 hari lagi' },
  { id: 3, title: 'Flowchart Sederhana', course: 'Computer Science', due: '24 Agu 2026', status: 'Sudah dikumpulkan', score: null, urgency: 'Menunggu nilai' },
  { id: 4, title: 'Latihan Hukum Newton', course: 'Fisika', due: '15 Agu 2026', status: 'Dinilai', score: 88, urgency: 'Selesai' }
];

const recentStudents = [
  { name: 'Aqzal', className: '10-A', progress: 82, score: 91 },
  { name: 'Rina Maharani', className: '10-A', progress: 76, score: 87 },
  { name: 'Dimas Prakoso', className: '10-B', progress: 69, score: 84 },
  { name: 'Siti Rahma', className: '10-A', progress: 88, score: 94 },
  { name: 'Fajar Nugroho', className: '10-B', progress: 58, score: 79 }
];

const navByRole = {
  admin: [
    ['dashboard', 'Dashboard', LayoutDashboard], ['users', 'Users', Users], ['courses', 'Courses', BookOpen],
    ['classes', 'Kelas', School], ['reports', 'Reports', BarChart3], ['settings', 'Settings', Settings]
  ],
  teacher: [
    ['dashboard', 'Dashboard', LayoutDashboard], ['courses', 'My Courses', BookOpen], ['assignments', 'Assignments', ClipboardList],
    ['students', 'Students', Users], ['gradebook', 'Gradebook', Award], ['settings', 'Settings', Settings]
  ],
  student: [
    ['dashboard', 'Dashboard', LayoutDashboard], ['courses', 'My Courses', BookOpen], ['assignments', 'Assignments', ClipboardList],
    ['grades', 'Grades', Award], ['settings', 'Settings', Settings]
  ]
};

function App(){
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('kartek-learn-demo-user');
    return saved ? JSON.parse(saved) : null;
  });
  const [page, setPage] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => { if(user) localStorage.setItem('kartek-learn-demo-user', JSON.stringify(user)); }, [user]);
  useEffect(() => { if(toast){ const t=setTimeout(()=>setToast(''),2600); return()=>clearTimeout(t);} }, [toast]);

  const login = role => { setUser(demoUsers[role]); setPage('dashboard'); setSelectedCourse(null); };
  const logout = () => { localStorage.removeItem('kartek-learn-demo-user'); setUser(null); };
  const navigate = target => { setPage(target); setSelectedCourse(null); setSidebarOpen(false); };
  const openCourse = course => { setSelectedCourse(course); setPage('course-detail'); setSidebarOpen(false); };

  if(!user) return <Login onLogin={login} />;

  return <div className="app-shell">
    <Sidebar user={user} page={page} open={sidebarOpen} onClose={()=>setSidebarOpen(false)} onNavigate={navigate} />
    <main className="main-area">
      <Topbar user={user} onMenu={()=>setSidebarOpen(true)} onLogout={logout} onRoleSwitch={login} />
      <div className="content-wrap">
        {page === 'dashboard' && user.role === 'admin' && <AdminDashboard onNavigate={navigate} onCourse={openCourse} />}
        {page === 'dashboard' && user.role === 'teacher' && <TeacherDashboard onNavigate={navigate} onCourse={openCourse} />}
        {page === 'dashboard' && user.role === 'student' && <StudentDashboard onNavigate={navigate} onCourse={openCourse} />}
        {page === 'courses' && <CoursesPage role={user.role} onCourse={openCourse} onToast={setToast} />}
        {page === 'course-detail' && <CourseDetail role={user.role} course={selectedCourse || courses[0]} onBack={()=>navigate('courses')} onToast={setToast} />}
        {page === 'assignments' && <AssignmentsPage role={user.role} onToast={setToast} />}
        {page === 'users' && <UsersPage onToast={setToast} />}
        {page === 'students' && <StudentsPage />}
        {page === 'gradebook' && <GradebookPage onToast={setToast} />}
        {page === 'grades' && <GradesPage />}
        {page === 'classes' && <ClassesPage onToast={setToast} />}
        {page === 'reports' && <ReportsPage />}
        {page === 'settings' && <SettingsPage user={user} />}
      </div>
    </main>
    {toast && <div className="toast"><CircleCheck size={18}/>{toast}</div>}
  </div>
}

function Login({onLogin}){
  return <div className="login-page">
    <div className="login-art">
      <div className="brand brand-light"><span className="brand-mark"><GraduationCap size={24}/></span><span>Kartek Learn</span></div>
      <div className="login-copy">
        <span className="eyebrow light"><Sparkles size={15}/> Learning Management System</span>
        <h1>Belajar, mengajar, dan bertumbuh dalam satu ruang.</h1>
        <p>Demo LMS V0 untuk menguji pengalaman Admin, Guru, dan Murid sebelum masuk ke pengembangan backend.</p>
        <div className="login-proof">
          <div><b>3</b><span>Role demo</span></div><div><b>4</b><span>Course aktif</span></div><div><b>100%</b><span>Interactive</span></div>
        </div>
      </div>
      <div className="floating-card fc-one"><div className="fc-icon"><TrendingUp size={18}/></div><div><b>74%</b><small>Learning progress</small></div></div>
      <div className="floating-card fc-two"><div className="avatars"><span>AR</span><span>RM</span><span>DS</span></div><div><b>32 students</b><small>Matematika · 10-A</small></div></div>
    </div>
    <div className="login-panel">
      <div className="mobile-brand brand"><span className="brand-mark"><GraduationCap size={23}/></span><span>Kartek Learn</span></div>
      <div className="login-form">
        <span className="eyebrow">DEMO ACCESS</span>
        <h2>Masuk ke Kartek Learn</h2>
        <p>Pilih role untuk melihat pengalaman masing-masing pengguna.</p>
        <div className="role-login-list">
          <button onClick={()=>onLogin('admin')} className="role-login-card">
            <span className="role-icon admin"><ShieldCheck/></span><span><b>Masuk sebagai Admin</b><small>Kelola user, kelas, course & laporan</small></span><ArrowRight size={18}/>
          </button>
          <button onClick={()=>onLogin('teacher')} className="role-login-card">
            <span className="role-icon teacher"><Presentation/></span><span><b>Masuk sebagai Guru</b><small>Materi, tugas, murid & penilaian</small></span><ArrowRight size={18}/>
          </button>
          <button onClick={()=>onLogin('student')} className="role-login-card">
            <span className="role-icon student"><GraduationCap/></span><span><b>Masuk sebagai Murid</b><small>Belajar, submit tugas & lihat nilai</small></span><ArrowRight size={18}/>
          </button>
        </div>
        <div className="demo-note"><CircleCheck size={16}/><span>Tidak perlu password — seluruh data pada versi ini adalah dummy.</span></div>
      </div>
      <div className="login-footer">Kartek Learn · Demo Version 0.1</div>
    </div>
  </div>
}

function Sidebar({user,page,open,onClose,onNavigate}){
  return <>
    <aside className={`sidebar ${open?'open':''}`}>
      <div className="sidebar-head"><div className="brand"><span className="brand-mark"><GraduationCap size={23}/></span><span>Kartek Learn</span></div><button className="icon-btn mobile-only" onClick={onClose}><X size={20}/></button></div>
      <div className="nav-label">MENU</div>
      <nav>{navByRole[user.role].map(([key,label,Icon])=><button key={key} className={`nav-item ${page===key?'active':''}`} onClick={()=>onNavigate(key)}><Icon size={19}/><span>{label}</span>{key==='assignments'&&<span className="nav-badge">3</span>}</button>)}</nav>
      <div className="sidebar-spacer"/>
      <div className="upgrade-card"><div className="upgrade-icon"><Sparkles size={17}/></div><b>LMS Demo V0</b><p>Frontend prototype dengan dummy data.</p><span>Siap lanjut ke V1 →</span></div>
      <div className="sidebar-user"><div className="avatar">{user.avatar}</div><div><b>{user.name}</b><small>{user.title}</small></div><MoreHorizontal size={18}/></div>
    </aside>
    {open && <div className="sidebar-overlay" onClick={onClose}/>} 
  </>
}

function Topbar({user,onMenu,onLogout,onRoleSwitch}){
  const [open,setOpen]=useState(false);
  return <header className="topbar">
    <div className="top-left"><button className="icon-btn menu-btn" onClick={onMenu}><Menu size={21}/></button><div className="searchbox"><Search size={18}/><input placeholder="Cari course, tugas, atau murid..."/><kbd>⌘ K</kbd></div></div>
    <div className="top-actions"><button className="icon-btn notification"><Bell size={20}/><span/></button><div className="profile-wrap"><button className="profile-button" onClick={()=>setOpen(!open)}><div className="avatar small">{user.avatar}</div><div className="profile-text"><b>{user.name}</b><small>{user.title}</small></div><ChevronDown size={16}/></button>
    {open&&<div className="profile-menu"><div className="profile-menu-head"><small>GANTI DEMO ROLE</small></div>{['admin','teacher','student'].map(r=><button key={r} onClick={()=>{onRoleSwitch(r);setOpen(false)}} className={user.role===r?'selected':''}>{r==='admin'?<ShieldCheck/>:r==='teacher'?<Presentation/>:<GraduationCap/>}<span>{r==='admin'?'Admin':r==='teacher'?'Guru':'Murid'}</span>{user.role===r&&<CheckCircle2 size={16}/>}</button>)}<div className="menu-sep"/><button onClick={onLogout}><LogOut/><span>Keluar demo</span></button></div>}</div></div>
  </header>
}

function PageHeader({eyebrow,title,desc,action}){return <div className="page-header"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{desc&&<p>{desc}</p>}</div>{action}</div>}
function StatCard({icon:Icon,label,value,meta,tone='neutral'}){return <div className="stat-card"><div className={`stat-icon ${tone}`}><Icon size={21}/></div><div><span>{label}</span><b>{value}</b><small>{meta}</small></div></div>}
function Progress({value}){return <div className="progress-track"><div style={{width:`${value}%`}}/></div>}
function Badge({children,type='neutral'}){return <span className={`badge ${type}`}>{children}</span>}

function AdminDashboard({onNavigate,onCourse}){
 return <>
  <PageHeader eyebrow="ADMIN OVERVIEW" title="Selamat sore, Admin 👋" desc="Pantau aktivitas sekolah dan kelola LMS dari satu tempat." action={<button className="primary-btn" onClick={()=>onNavigate('users')}><Plus size={18}/>Tambah User</button>}/>
  <div className="stats-grid four"><StatCard icon={GraduationCap} label="Total Murid" value="486" meta="+24 bulan ini" tone="violet"/><StatCard icon={Presentation} label="Total Guru" value="28" meta="24 aktif hari ini" tone="blue"/><StatCard icon={BookOpen} label="Course Aktif" value="18" meta="6 kategori" tone="emerald"/><StatCard icon={School} label="Kelas" value="16" meta="Kelas 7 — 12" tone="orange"/></div>
  <div className="dashboard-grid two-one">
   <section className="panel"><div className="panel-head"><div><h3>Course Terpopuler</h3><p>Aktivitas belajar minggu ini</p></div><button className="text-btn" onClick={()=>onNavigate('courses')}>Lihat semua <ChevronRight size={16}/></button></div><div className="course-list compact">{courses.slice(0,3).map(c=><button className="course-row" key={c.id} onClick={()=>onCourse(c)}><div className={`course-mini-icon ${c.accent}`}><BookOpen size={20}/></div><div className="course-row-main"><b>{c.title}</b><span>{c.teacher} · {c.className}</span><Progress value={c.progress}/></div><div className="course-row-end"><b>{c.progress}%</b><small>{c.students} murid</small></div></button>)}</div></section>
   <section className="panel"><div className="panel-head"><div><h3>Aktivitas Hari Ini</h3><p>Ringkasan sistem</p></div></div><div className="activity-list"><Activity icon={UserCheck} text="12 murid baru ditambahkan" time="08:20" tone="violet"/><Activity icon={Upload} text="8 tugas baru dikumpulkan" time="10:45" tone="blue"/><Activity icon={BookMarked} text="2 materi baru dipublikasi" time="13:10" tone="emerald"/><Activity icon={Award} text="36 nilai telah diperbarui" time="15:32" tone="orange"/></div></section>
  </div>
  <section className="panel"><div className="panel-head"><div><h3>User Terbaru</h3><p>Akun yang baru aktif di sistem</p></div><button className="text-btn" onClick={()=>onNavigate('users')}>Kelola user <ChevronRight size={16}/></button></div><UserTable mini/></section>
 </>
}

function TeacherDashboard({onNavigate,onCourse}){
 return <>
  <PageHeader eyebrow="TEACHER SPACE" title="Selamat sore, Pak Ramadhan Eka 👋" desc="Ada 8 submission baru yang perlu diperiksa hari ini." action={<button className="primary-btn" onClick={()=>onNavigate('assignments')}><Plus size={18}/>Buat Tugas</button>}/>
  <div className="stats-grid four"><StatCard icon={BookOpen} label="Course Saya" value="4" meta="3 sedang aktif" tone="violet"/><StatCard icon={Users} label="Total Murid" value="94" meta="3 kelas" tone="blue"/><StatCard icon={ClipboardList} label="Perlu Dinilai" value="8" meta="Submission baru" tone="orange"/><StatCard icon={TrendingUp} label="Rata-rata Kelas" value="86.4" meta="+2.3 dari bulan lalu" tone="emerald"/></div>
  <section className="section-space"><div className="section-title-row"><div><h2>Course yang Anda ajar</h2><p>Lanjutkan mengelola materi dan aktivitas kelas.</p></div><button className="text-btn" onClick={()=>onNavigate('courses')}>Lihat semua <ChevronRight size={16}/></button></div><div className="course-card-grid three">{courses.slice(0,3).map(c=><CourseCard key={c.id} course={c} role="teacher" onClick={()=>onCourse(c)}/>)}</div></section>
  <div className="dashboard-grid two-one"><section className="panel"><div className="panel-head"><div><h3>Submission Terbaru</h3><p>Perlu ditinjau dan diberi nilai</p></div><button className="text-btn" onClick={()=>onNavigate('gradebook')}>Buka gradebook <ChevronRight size={16}/></button></div><div className="submission-list">{recentStudents.slice(0,4).map((s,i)=><div className="submission-item" key={s.name}><div className="avatar soft">{s.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div><div><b>{s.name}</b><small>{i%2===0?'Tugas Persamaan Kuadrat':'Quiz Aljabar'}</small></div><span>{i===0?'8 menit lalu':i===1?'24 menit lalu':i===2?'1 jam lalu':'2 jam lalu'}</span><button className="outline-btn small" onClick={()=>onNavigate('gradebook')}>Nilai</button></div>)}</div></section>
  <section className="panel"><div className="panel-head"><div><h3>Jadwal Mendatang</h3><p>7 hari ke depan</p></div></div><div className="schedule-list"><Schedule day="20" month="AGU" title="Deadline Tugas Kuadrat" meta="Matematika · 10-A"/><Schedule day="21" month="AGU" title="Quiz Aljabar" meta="Matematika · 10-B"/><Schedule day="24" month="AGU" title="Materi Fungsi" meta="Publikasi otomatis"/></div></section></div>
 </>
}

function StudentDashboard({onNavigate,onCourse}){
 return <>
  <PageHeader eyebrow="STUDENT HOME" title="Selamat sore, Aqzal 👋" desc="Lanjutkan ritme belajarmu. Ada 2 tugas yang perlu diselesaikan minggu ini."/>
  <div className="student-hero"><div><span className="eyebrow light">WEEKLY PROGRESS</span><h2>Kamu sudah menyelesaikan <strong>12 dari 16</strong> aktivitas minggu ini.</h2><p>Bagus! Tinggal sedikit lagi untuk mencapai target mingguan.</p><div className="hero-progress"><Progress value={75}/><b>75%</b></div></div><div className="streak"><span>🔥</span><b>7 hari</b><small>Learning streak</small></div></div>
  <div className="stats-grid three"><StatCard icon={BookOpen} label="Course Aktif" value="4" meta="Semua course" tone="violet"/><StatCard icon={Clock3} label="Tugas Mendatang" value="2" meta="Deadline terdekat 2 hari" tone="orange"/><StatCard icon={Award} label="Rata-rata Nilai" value="88.6" meta="+3.1 semester ini" tone="emerald"/></div>
  <section className="section-space"><div className="section-title-row"><div><h2>Lanjutkan Belajar</h2><p>Course yang terakhir kamu akses.</p></div><button className="text-btn" onClick={()=>onNavigate('courses')}>Semua course <ChevronRight size={16}/></button></div><div className="course-card-grid three">{courses.slice(0,3).map(c=><CourseCard key={c.id} course={c} role="student" onClick={()=>onCourse(c)}/>)}</div></section>
  <div className="dashboard-grid two-one"><section className="panel"><div className="panel-head"><div><h3>Tugas Mendatang</h3><p>Jangan lewatkan deadline berikut.</p></div><button className="text-btn" onClick={()=>onNavigate('assignments')}>Lihat tugas <ChevronRight size={16}/></button></div><div className="assignment-mini-list">{assignments.slice(0,3).map(a=><div className="assignment-mini" key={a.id}><div className="assignment-icon"><FileText size={19}/></div><div><b>{a.title}</b><small>{a.course}</small></div><div className="assignment-due"><span>{a.due}</span><small>{a.urgency}</small></div></div>)}</div></section>
  <section className="panel"><div className="panel-head"><div><h3>Pencapaian</h3><p>Terus pertahankan!</p></div></div><div className="achievement"><div className="medal">🏆</div><div><b>Top Learner</b><p>Kamu masuk 10 besar aktivitas belajar Kelas 10-A minggu ini.</p></div></div><div className="rank-row"><span>Peringkat kelas</span><b>#7 <small>/ 32</small></b></div></section></div>
 </>
}

function Activity({icon:Icon,text,time,tone}){return <div className="activity-item"><div className={`activity-icon ${tone}`}><Icon size={17}/></div><div><b>{text}</b><small>{time}</small></div></div>}
function Schedule({day,month,title,meta}){return <div className="schedule-item"><div className="date-box"><b>{day}</b><small>{month}</small></div><div><b>{title}</b><small>{meta}</small></div></div>}

function CourseCard({course,role,onClick}){return <button className="course-card" onClick={onClick}><div className={`course-cover ${course.accent}`}><div className="course-code">{course.code}</div><BookOpen size={34}/><div className="cover-bubbles"><i/><i/><i/></div></div><div className="course-card-body"><div className="course-meta"><Badge type={course.accent}>{course.className}</Badge><span>{course.lessons} lessons</span></div><h3>{course.title}</h3><p>{course.teacher}</p><div className="course-progress-label"><span>{role==='teacher'?'Class progress':'Progress'}</span><b>{course.progress}%</b></div><Progress value={course.progress}/><div className="course-card-foot"><span>{role==='teacher'?`${course.students} murid`:course.next}</span><span className="round-arrow"><ArrowRight size={16}/></span></div></div></button>}

function CoursesPage({role,onCourse,onToast}){
 return <><PageHeader eyebrow={role==='teacher'?'TEACHER COURSES':role==='admin'?'COURSE MANAGEMENT':'LEARNING'} title={role==='teacher'?'My Courses':role==='admin'?'Kelola Course':'My Courses'} desc={role==='admin'?'Buat, atur, dan pantau seluruh course aktif.':'Semua course yang terhubung dengan akun ini.'} action={role!=='student'?<button className="primary-btn" onClick={()=>onToast('Form tambah course akan tersedia di V1')}><Plus size={18}/>Buat Course</button>:null}/><div className="filter-bar"><div className="searchbox wide"><Search size={18}/><input placeholder="Cari course..."/></div><select><option>Semua kelas</option><option>Kelas 10-A</option><option>Kelas 10-B</option></select><select><option>Semua status</option><option>Aktif</option><option>Draft</option></select></div><div className="course-card-grid four-grid">{courses.map(c=><CourseCard key={c.id} course={c} role={role} onClick={()=>onCourse(c)}/>)}</div></>
}

function CourseDetail({role,course,onBack,onToast}){
 const [tab,setTab]=useState('lessons');
 const [selectedLesson,setSelectedLesson]=useState(null);
 const [done,setDone]=useState(()=>JSON.parse(localStorage.getItem('kartek-learn-done-lessons')||'[]'));
 const activeModules=courseModules[course.id] || courseModules.math;
 const toggleLesson=id=>{ const next=done.includes(id)?done.filter(x=>x!==id):[...done,id]; setDone(next); localStorage.setItem('kartek-learn-done-lessons',JSON.stringify(next)); onToast(done.includes(id)?'Lesson ditandai belum selesai':'Lesson selesai — progress diperbarui'); };
 const openLesson=lesson=>{setSelectedLesson(lesson);setTab('lessons');};
 const changeTab=next=>{setTab(next);if(next!=='lessons')setSelectedLesson(null);};
 return <><button className="back-link" onClick={onBack}>← Kembali ke courses</button><div className={`course-detail-hero ${course.accent}`}><div><Badge type="glass">{course.code}</Badge><h1>{course.title}</h1><p>{course.description}</p><div className="hero-meta"><span><Presentation size={17}/>{course.teacher}</span><span><Users size={17}/>{course.students} murid</span><span><Layers3 size={17}/>{course.lessons} lessons</span></div></div><div className="detail-progress"><b>{course.progress}%</b><span>{role==='student'?'Progress kamu':'Class progress'}</span><Progress value={course.progress}/></div></div><div className="tabs"><button className={tab==='overview'?'active':''} onClick={()=>changeTab('overview')}>Overview</button><button className={tab==='lessons'?'active':''} onClick={()=>changeTab('lessons')}>Lessons</button><button className={tab==='assignments'?'active':''} onClick={()=>changeTab('assignments')}>Assignments</button><button className={tab==='students'?'active':''} onClick={()=>changeTab('students')}>{role==='student'?'Discussion':'Students'}</button></div>
 {tab==='overview'&&<div className="dashboard-grid two-one"><section className="panel"><h3>Tentang Course</h3><p className="body-copy">Course ini berisi contoh materi nyata untuk demo Kartek Learn: ringkasan konsep, contoh soal, latihan, quiz, dan assignment. Materi disusun bertahap agar murid dapat belajar dan menandai progress.</p><div className="info-grid"><div><BookOpen/><b>{activeModules.reduce((n,m)=>n+m.lessons.length,0)} Lessons</b><span>{activeModules.length} module tersedia</span></div><div><ClipboardList/><b>Assignments</b><span>Tugas dengan deadline</span></div><div><Award/><b>Quiz & Latihan</b><span>Contoh assessment</span></div></div></section><section className="panel"><h3>Instruktur</h3><div className="instructor-card"><div className="avatar large">{course.teacher.split(' ').map(x=>x[0]).join('').slice(0,2)}</div><b>{course.teacher}</b><span>Pengajar {course.title}</span><button className="outline-btn" onClick={()=>onToast('Fitur pesan akan tersedia di V1')}><MessageSquareText size={16}/>Kirim Pesan</button></div></section></div>}
 {tab==='lessons'&&(selectedLesson?<LessonViewer lesson={selectedLesson} role={role} isDone={selectedLesson.done||done.includes(selectedLesson.id)} onBack={()=>setSelectedLesson(null)} onComplete={()=>toggleLesson(selectedLesson.id)} onToast={onToast}/>:<div className="modules-list">{activeModules.map((m,mi)=><section className="module panel" key={m.title}><div className="module-head"><div><span>MODULE {mi+1}</span><h3>{m.title.split('·')[1]}</h3></div><div><b>{m.progress}%</b><Progress value={m.progress}/></div></div><div className="lesson-list">{m.lessons.map(l=>{const isDone=l.done||done.includes(l.id); return <div className={`lesson-row ${l.current?'current':''}`} key={l.id}><button className={`lesson-check ${isDone?'done':''}`} onClick={()=>role==='student'&&toggleLesson(l.id)} title={role==='student'?'Tandai selesai':'Status lesson'}>{isDone?<CheckCircle2 size={20}/>:<Circle size={20}/>}</button><div className={`lesson-type ${l.type.toLowerCase()}`}>{l.type==='Video'?<PlayCircle/>:l.type==='Quiz'?<ListChecks/>:l.type==='Assignment'?<ClipboardList/>:<FileText/>}</div><button className="lesson-main lesson-open" onClick={()=>openLesson(l)}><b>{l.title}</b><span>{l.type} · {l.duration}</span></button>{l.current&&<Badge type="violet">Lanjutkan</Badge>}<button className="lesson-arrow" onClick={()=>openLesson(l)} aria-label={`Buka ${l.title}`}><ChevronRight size={18}/></button></div>})}</div></section>)}</div>)}
 {tab==='assignments'&&<AssignmentsPage role={role} embedded onToast={onToast}/>} 
 {tab==='students'&&(role==='student'?<section className="panel empty-state"><MessageSquareText/><h3>Discussion Board</h3><p>Forum diskusi course akan diaktifkan pada V1.</p><button className="outline-btn" onClick={()=>onToast('Discussion Board masuk roadmap V1')}>Lihat roadmap</button></section>:<StudentsPage embedded/>)}
 </>
}

function LessonViewer({lesson,role,isDone,onBack,onComplete,onToast}){
 const [showAnswers,setShowAnswers]=useState(false);
 return <section className="lesson-viewer panel">
   <div className="lesson-viewer-top"><button className="back-link compact" onClick={onBack}>← Daftar materi</button><div className="lesson-viewer-actions"><Badge type={lesson.type==='Quiz'?'blue':lesson.type==='Assignment'?'orange':'violet'}>{lesson.type}</Badge><span>{lesson.duration}</span></div></div>
   <div className="lesson-viewer-title"><div className={`lesson-type big ${lesson.type.toLowerCase()}`}>{lesson.type==='Video'?<PlayCircle/>:lesson.type==='Quiz'?<ListChecks/>:lesson.type==='Assignment'?<ClipboardList/>:<BookOpen/>}</div><div><span className="eyebrow">LEARNING CONTENT</span><h2>{lesson.title}</h2><p>{lesson.lead}</p></div></div>
   {lesson.type==='Video'&&<div className="video-placeholder"><div className="video-play"><PlayCircle size={44}/></div><b>Video pembelajaran demo</b><span>Player video asli dapat dihubungkan ke YouTube, Vimeo, atau file internal pada V1.</span></div>}
   {lesson.paragraphs?.map((p,i)=><p className="lesson-paragraph" key={i}>{p}</p>)}
   {lesson.bullets&&<div className="content-block"><h3>Poin penting</h3><ul>{lesson.bullets.map((b,i)=><li key={i}>{b}</li>)}</ul></div>}
   {lesson.example&&<div className="example-box"><span>CONTOH</span><h3>{lesson.example.title}</h3>{lesson.example.lines.map((line,i)=><code key={i}>{line}</code>)}</div>}
   {lesson.exercise&&<div className="content-block exercise-block"><h3>Latihan mandiri</h3><ol>{lesson.exercise.map((q,i)=><li key={i}>{q}</li>)}</ol><small>Kerjakan terlebih dahulu tanpa melihat catatan.</small></div>}
   {lesson.quiz&&<div className="quiz-preview"><div className="quiz-head"><div><span className="eyebrow">MINI QUIZ</span><h3>Cek pemahamanmu</h3></div><Badge type="blue">{lesson.quiz.length} pertanyaan demo</Badge></div>{lesson.quiz.map((item,i)=><div className="quiz-question" key={i}><b>{i+1}. {item.q}</b><div className="quiz-options">{item.options.map(o=><span key={o}>{o}</span>)}</div>{showAnswers&&<div className="quiz-answer"><CheckCircle2 size={16}/>Jawaban: {item.answer}</div>}</div>)}<button className="outline-btn" onClick={()=>setShowAnswers(!showAnswers)}>{showAnswers?'Sembunyikan jawaban':'Cek jawaban demo'}</button></div>}
   {lesson.note&&<div className="lesson-note"><ClipboardList size={20}/><div><b>Catatan tugas</b><p>{lesson.note}</p></div></div>}
   <div className="lesson-viewer-footer"><div><b>Materi demo Kartek Learn</b><span>{role==='student'?'Progress disimpan lokal di browser pada V0.2.':'Guru melihat tampilan yang sama sebagai preview materi.'}</span></div>{role==='student'?<button className={isDone?'outline-btn':'primary-btn'} onClick={onComplete}>{isDone?<><CheckCircle2 size={17}/>Sudah selesai</>:<><CircleCheck size={17}/>Tandai selesai</>}</button>:<button className="outline-btn" onClick={()=>onToast('Editor materi akan tersedia saat backend diaktifkan')}><Pencil size={16}/>Edit materi</button>}</div>
 </section>
}

function AssignmentsPage({role,embedded=false,onToast}){
 const [submitted,setSubmitted]=useState(()=>localStorage.getItem('lms-demo-submit')==='1');
 const submit=()=>{setSubmitted(true);localStorage.setItem('lms-demo-submit','1');onToast('Tugas berhasil dikumpulkan (demo)');};
 return <>{!embedded&&<PageHeader eyebrow="ASSIGNMENTS" title={role==='student'?'Tugas Saya':'Assignments'} desc={role==='student'?'Pantau deadline dan status pengumpulan tugas.':'Buat tugas dan pantau submission murid.'} action={role!=='student'?<button className="primary-btn" onClick={()=>onToast('Form buat assignment akan tersedia di V1')}><Plus size={18}/>Buat Assignment</button>:null}/>}<section className="panel assignment-table-wrap"><div className="assignment-tabs"><button className="active">Semua</button><button>Aktif</button><button>Selesai</button></div><div className="assignment-table"><div className="assignment-table-head"><span>Assignment</span><span>Deadline</span><span>Status</span><span>{role==='student'?'Nilai':'Submission'}</span><span/></div>{assignments.map((a,i)=>{let status=a.status;if(role==='student'&&i===0&&submitted)status='Sudah dikumpulkan';return <div className="assignment-table-row" key={a.id}><div className="assignment-name"><div className="assignment-icon"><FileText size={18}/></div><div><b>{a.title}</b><small>{a.course}</small></div></div><span>{a.due}</span><span><Badge type={status==='Dinilai'?'emerald':status==='Sudah dikumpulkan'?'blue':'orange'}>{status}</Badge></span><span>{role==='student'?(a.score?a.score:'—'):(i===0?'24 / 32':i===1?'18 / 32':'32 / 32')}</span><span>{role==='student'&&i===0&&!submitted?<button className="primary-btn tiny" onClick={submit}>Submit</button>:<button className="icon-btn"><MoreHorizontal size={18}/></button>}</span></div>})}</div></section></>
}

function UsersPage({onToast}){return <><PageHeader eyebrow="USER MANAGEMENT" title="Users" desc="Kelola akun Admin, Guru, dan Murid." action={<button className="primary-btn" onClick={()=>onToast('Form tambah user akan tersedia di V1')}><Plus size={18}/>Tambah User</button>}/><div className="stats-grid three"><StatCard icon={Users} label="Semua User" value="515" meta="+27 bulan ini" tone="violet"/><StatCard icon={Presentation} label="Guru" value="28" meta="24 aktif" tone="blue"/><StatCard icon={GraduationCap} label="Murid" value="486" meta="16 kelas" tone="emerald"/></div><section className="panel"><div className="table-toolbar"><div className="searchbox wide"><Search size={18}/><input placeholder="Cari nama atau email..."/></div><select><option>Semua role</option><option>Guru</option><option>Murid</option></select></div><UserTable onToast={onToast}/></section></>}
function UserTable({mini=false,onToast=()=>{}}){const rows=[['Aqzal','aqzal@demo.com','Murid','10-A','Aktif'],['Ramadhan Eka','ramadhan@demo.com','Guru','Matematika','Aktif'],['Admin','admin@demo.com','Admin','Administrator','Aktif'],['Rina Maharani','rina@school.id','Murid','10-A','Aktif'],['Rizky Ananda','rizky@school.id','Guru','Computer Science','Aktif']];return <div className="data-table"><div className="data-head"><span>User</span><span>Role</span><span>Kelas / Mapel</span><span>Status</span>{!mini&&<span/>}</div>{rows.slice(0,mini?4:5).map(r=><div className="data-row" key={r[1]}><div className="user-cell"><div className="avatar soft">{r[0].split(' ').map(x=>x[0]).join('').slice(0,2)}</div><div><b>{r[0]}</b><small>{r[1]}</small></div></div><span><Badge type={r[2]==='Guru'?'blue':'violet'}>{r[2]}</Badge></span><span>{r[3]}</span><span><Badge type="emerald">{r[4]}</Badge></span>{!mini&&<span className="row-actions"><button className="icon-btn" onClick={()=>onToast('Edit user — demo')}><Pencil size={16}/></button><button className="icon-btn" onClick={()=>onToast('Delete dinonaktifkan pada demo')}><Trash2 size={16}/></button></span>}</div>)}</div>}

function StudentsPage({embedded=false}){return <>{!embedded&&<PageHeader eyebrow="STUDENTS" title="Murid Saya" desc="Pantau progress dan performa murid pada course Anda."/>}<section className="panel"><div className="data-table student-table"><div className="data-head"><span>Murid</span><span>Kelas</span><span>Progress</span><span>Rata-rata</span><span>Status</span></div>{recentStudents.map(s=><div className="data-row" key={s.name}><div className="user-cell"><div className="avatar soft">{s.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div><div><b>{s.name}</b><small>student@school.id</small></div></div><span>{s.className}</span><span className="progress-cell"><Progress value={s.progress}/><b>{s.progress}%</b></span><span><b>{s.score}</b></span><span><Badge type={s.progress>=70?'emerald':'orange'}>{s.progress>=70?'On track':'Perlu perhatian'}</Badge></span></div>)}</div></section></>}

function GradebookPage({onToast}){return <><PageHeader eyebrow="ASSESSMENT" title="Gradebook" desc="Review submission dan berikan nilai kepada murid." action={<button className="outline-btn" onClick={()=>onToast('Export CSV akan tersedia di V1')}><Upload size={17}/>Export</button>}/><section className="panel"><div className="grade-summary"><div><span>Course</span><b>Matematika · 10-A</b></div><div><span>Assignment</span><b>Tugas Persamaan Kuadrat</b></div><div><span>Sudah dinilai</span><b>24 / 32</b></div><div><span>Rata-rata</span><b>86.2</b></div></div><div className="data-table"><div className="data-head"><span>Murid</span><span>Submitted</span><span>Score</span><span>Feedback</span><span/></div>{recentStudents.map((s,i)=><div className="data-row" key={s.name}><div className="user-cell"><div className="avatar soft">{s.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div><div><b>{s.name}</b><small>{s.className}</small></div></div><span>{i===3?'Belum':'18 Agu, 14:2'+i}</span><span>{i===3?'—':s.score}</span><span>{i===3?'—':'Good work!'}</span><span><button className="outline-btn tiny" onClick={()=>onToast('Panel penilaian dibuka (demo)')}>{i===3?'Lihat':'Edit nilai'}</button></span></div>)}</div></section></>}

function GradesPage(){return <><PageHeader eyebrow="MY RESULTS" title="Nilai Saya" desc="Lihat hasil belajar dan feedback dari guru."/><div className="stats-grid three"><StatCard icon={Award} label="Rata-rata Nilai" value="88.6" meta="Semester berjalan" tone="emerald"/><StatCard icon={TrendingUp} label="Nilai Tertinggi" value="96" meta="Computer Science" tone="violet"/><StatCard icon={ClipboardList} label="Sudah Dinilai" value="12" meta="4 course" tone="blue"/></div><section className="panel"><div className="data-table"><div className="data-head"><span>Assessment</span><span>Course</span><span>Nilai</span><span>Feedback</span><span>Status</span></div>{[['Quiz Aljabar','Matematika','92','Pemahaman sangat baik'],['Latihan Hukum Newton','Fisika','88','Perhatikan satuan'],['Web Basics Quiz','Computer Science','96','Excellent!'],['Narrative Text Quiz','English Language','84','Improve grammar']].map(r=><div className="data-row" key={r[0]}><b>{r[0]}</b><span>{r[1]}</span><span className="score-pill">{r[2]}</span><span>{r[3]}</span><span><Badge type="emerald">Dinilai</Badge></span></div>)}</div></section></>}

function ClassesPage({onToast}){return <><PageHeader eyebrow="CLASS MANAGEMENT" title="Kelas" desc="Atur rombongan belajar dan wali kelas." action={<button className="primary-btn" onClick={()=>onToast('Form tambah kelas akan tersedia di V1')}><Plus size={18}/>Tambah Kelas</button>}/><div className="class-grid">{['10-A','10-B','11-A','11-B','12-A','12-B'].map((c,i)=><section className="class-card panel" key={c}><div className="class-icon"><School/></div><div><Badge type={i<2?'emerald':'neutral'}>{i<2?'Aktif':'Semester aktif'}</Badge><h3>Kelas {c}</h3><p>Wali kelas: {['Dina Maharani','Ramadhan Eka','Sarah Wijaya'][i%3]}</p><div className="class-meta"><span><Users size={16}/>{30+i%3} murid</span><span><BookOpen size={16}/>8 course</span></div></div><button className="icon-btn"><MoreHorizontal/></button></section>)}</div></>}

function ReportsPage(){return <><PageHeader eyebrow="ANALYTICS" title="Reports" desc="Ringkasan performa pembelajaran seluruh sekolah."/><div className="stats-grid four"><StatCard icon={TrendingUp} label="Completion Rate" value="78.4%" meta="+4.2% bulan ini" tone="emerald"/><StatCard icon={Award} label="Average Score" value="84.7" meta="Semua course" tone="violet"/><StatCard icon={UserCheck} label="Active Learners" value="428" meta="88% dari murid" tone="blue"/><StatCard icon={Clock3} label="Learning Time" value="6.4h" meta="Rata-rata / minggu" tone="orange"/></div><div className="dashboard-grid two-one"><section className="panel"><div className="panel-head"><div><h3>Completion per Course</h3><p>Persentase penyelesaian materi</p></div></div><div className="bar-report">{courses.map(c=><div key={c.id}><div><span>{c.title}</span><b>{c.progress}%</b></div><Progress value={c.progress}/></div>)}</div></section><section className="panel"><h3>Ringkasan</h3><div className="report-ring"><div><b>84%</b><span>Healthy</span></div></div><p className="center-copy">Mayoritas course berada pada jalur pembelajaran yang sehat.</p></section></div></>}

function SettingsPage({user}){return <><PageHeader eyebrow="PREFERENCES" title="Settings" desc="Pengaturan profil dan preferensi demo."/><div className="settings-grid"><section className="panel"><h3>Profil</h3><div className="profile-settings"><div className="avatar xlarge">{user.avatar}</div><div><b>{user.name}</b><span>{user.email}</span><Badge type="violet">{user.role.toUpperCase()}</Badge></div></div><div className="form-grid"><label>Nama lengkap<input value={user.name} readOnly/></label><label>Email<input value={user.email} readOnly/></label><label>Role<input value={user.role} readOnly/></label><label>Bahasa<select defaultValue="id"><option value="id">Bahasa Indonesia</option><option>English</option></select></label></div></section><section className="panel"><h3>Versi Demo</h3><div className="demo-version"><Sparkles/><b>Kartek Learn V0.2</b><p>Versi ini menggunakan dummy data dan local storage. Authentication, database, upload file, email, dan notifikasi real belum diaktifkan.</p></div></section></div></>}

createRoot(document.getElementById('root')).render(<App/>);
