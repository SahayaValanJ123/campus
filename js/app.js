/**
 * CampusSphere - Multi-College Student Platform Engine
 * Student-Led College Servers, EduVault Library, Dept Bazaar & Campus Connect
 */

const VALID_SERVERS = {
  'VV2026': 'VV College Server',
  'CEG4401': 'CEG Guindy Server',
  'PSG5502': 'PSG Tech Server',
  'MIT3301': 'MIT Chromepet Server',
  'SSN1004': 'SSN College Server'
};

const INITIAL_STORE = {
  isUnlocked: false,
  serverCode: 'VV2026',
  serverName: 'VV College Server',
  studentName: 'Suresh Kumar',
  rollNo: '953422106042',
  activeDept: 'ECE',
  activeSem: 3,
  userRole: 'student', // 'student' | 'dept_mod' | 'staff' | 'admin'
  activeMaterialType: 'ALL',
  deptBazaarOnlyMyDept: true,
  connectOnlyMyDept: true,

  // EduVault Academic Library Store
  subjects: {
    'ECE_Sem3': [
      { id: 'sub1', code: 'EC3351', name: 'Digital Electronics', materials: [
        { id: 'm1', title: 'Unit 1-5 Handwritten Class Notes (Topper)', type: 'Notes', author: 'Rahul (ECE 3rd Yr • 953422106010)', url: '#', status: 'approved', downloads: 142 },
        { id: 'm2', title: 'Anna University Nov/Dec 2024 Solved PYQ', type: 'PYQ', author: 'Dept Mod Arun', url: '#', status: 'approved', downloads: 210 },
        { id: 'm3', title: 'Digital ICs & Logic Gates Complete PDF Textbook', type: 'PDF Notes', author: 'Karthik (ECE)', url: '#', status: 'approved', downloads: 175 },
        { id: 'm4', title: 'Karnaugh Map & Logic Gates Formula Sheet', type: 'Formula Sheet', author: 'Karthik (ECE)', url: '#', status: 'approved', downloads: 98 }
      ]},
      { id: 'sub2', code: 'EC3352', name: 'Signals & Systems', materials: [
        { id: 'm5', title: 'Fourier & Laplace Transform Solved Problems', type: 'Notes', author: 'Priya (ECE • 953422106031)', url: '#', status: 'approved', downloads: 185 },
        { id: 'm6', title: '2023 & 2024 End-Sem Question Bank', type: 'PYQ', author: 'Dept Mod', url: '#', status: 'approved', downloads: 310 }
      ]},
      { id: 'sub3', code: 'EC3353', name: 'Electronic Circuits I', materials: [
        { id: 'm7', title: 'BJT & MOSFET Biasing Handwritten Diagrams', type: 'Notes', author: 'Arun (ECE)', url: '#', status: 'approved', downloads: 120 }
      ]}
    ],
    'CSE_Sem3': [
      { id: 'sub4', code: 'CS3351', name: 'Data Structures & Algorithms', materials: [
        { id: 'm8', title: 'Trees, Graphs & Sorting C++ Code Notes', type: 'Notes', author: 'Anish (CSE)', url: '#', status: 'approved', downloads: 240 },
        { id: 'm9', title: '5 Years Question Paper Bundle with Answers', type: 'PYQ', author: 'CSE Mod', url: '#', status: 'approved', downloads: 410 }
      ]}
    ]
  },

  // Queue for Notes submitted by students awaiting Mod Approval
  pendingUploads: [
    {
      id: 'p1',
      dept: 'ECE',
      sem: 3,
      subjectName: 'Digital Electronics',
      title: 'Unit 4 Sequential Circuits Shift Register Notes',
      type: 'Notes',
      uploader: 'Suresh (ECE • 953422106042)',
      date: '2026-08-19'
    }
  ],

  // Campus Connect Feed & Live Polls
  connectPosts: [
    {
      id: 'cp1',
      type: 'poll',
      author: 'Vignesh (ECE • Mod)',
      dept: 'ECE',
      date: 'Aug 22, 2026',
      title: '📊 Poll: Which Professional Elective should our ECE department pick for Sem 4?',
      options: [
        { text: 'VLSI Design & Hardware Description', votes: 48 },
        { text: 'Embedded Systems & IoT Security', votes: 62 },
        { text: 'Robotics & Industrial Automation', votes: 19 }
      ],
      userVoted: 1,
      totalVotes: 129,
      answers: [
        { author: 'Rahul (ECE)', text: 'Embedded Systems has great job placements in core companies!' }
      ]
    },
    {
      id: 'cp2',
      type: 'question',
      author: 'Priya (CSE)',
      dept: 'CSE',
      date: 'Aug 21, 2026',
      title: '❓ Need suggestions for 3rd Year Mini Project idea combining Flutter & AI',
      options: [],
      answers: [
        { author: 'Karthik (ECE)', text: 'Build a Smart Agriculture Crop Disease Detector app with TensorFlow Lite!' },
        { author: 'Anish (CSE)', text: 'Build a Campus Student Resource Sharing app with real-time poll feeds!' }
      ]
    }
  ],

  // Dept Bazaar (Department Scoped Buy & Sell Marketplace)
  marketplace: [
    {
      id: 'mk1',
      title: 'Digital Electronics by Morris Mano (4th Ed)',
      dept: 'ECE',
      price: 250,
      condition: 'Like New',
      sellerName: 'Vignesh (ECE 4th Yr • 953421106099)',
      sellerPhone: '9876543210',
      icon: '📚'
    },
    {
      id: 'mk2',
      title: 'Casio fx-991EX ClassWiz Scientific Calculator',
      dept: 'CSE',
      price: 650,
      condition: 'Excellent',
      sellerName: 'Deepak (CSE • 953422104015)',
      sellerPhone: '9876543211',
      icon: '🔢'
    },
    {
      id: 'mk3',
      title: 'Mini Drafter & Engineering Drawing Board',
      dept: 'MECH',
      price: 300,
      condition: 'Good',
      sellerName: 'Karthik (Mech • 953422114008)',
      sellerPhone: '9876543212',
      icon: '📐'
    }
  ],

  // College & Dept Events
  events: [
    {
      id: 'ev1',
      title: 'ELECTRA 2026 - National Level Technical Symposium',
      dept: 'ECE Department',
      postedBy: 'ECE Association Rep (Vignesh [Mod])',
      date: 'Sept 15, 2026',
      venue: 'VV Main Auditorium',
      desc: 'Paper presentation, Circuit Debugging, Robo Race & Project Expo. Cash prizes worth ₹50,000!',
      link: '#'
    },
    {
      id: 'ev2',
      title: 'Hack-a-Bit 24-Hour Campus Hackathon',
      dept: 'CSE & IT',
      postedBy: 'Coding Club Lead (Anish)',
      date: 'Sept 22, 2026',
      venue: 'Computer Lab 3',
      desc: 'Build web/mobile solutions for real campus problems. Open to all departments.',
      link: '#'
    }
  ],

  // Staff Official Announcements (Read Only Channel)
  announcements: [
    {
      id: 'an1',
      author: 'Dr. R. Ramanathan (HOD / ECE)',
      dept: 'ECE Dept',
      date: 'Aug 19, 2026',
      title: 'Internal Assessment Test - II Schedule & Syllabus',
      content: 'All 2nd and 3rd year ECE students are hereby informed that Model Test II starts from Aug 28. Attendance is mandatory.'
    },
    {
      id: 'an2',
      author: 'Exam Cell VV College',
      dept: 'All Departments',
      date: 'Aug 17, 2026',
      title: 'Anna University Semester Exam Fee Payment Circular',
      content: 'Last date for paying semester examination fees without fine is Aug 30, 2026. Pay via college portal.'
    }
  ]
};

// Application State Handler
class CampusApp {
  constructor() {
    this.store = this.loadStore();
    this.initElements();
    this.bindEvents();
    this.renderAll();
  }

  loadStore() {
    const saved = localStorage.getItem('cs_store_v2');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return JSON.parse(JSON.stringify(INITIAL_STORE));
  }

  saveStore() {
    localStorage.setItem('cs_store_v2', JSON.stringify(this.store));
  }

  initElements() {
    this.elGatewayModal = document.getElementById('gatewayModal');
    this.elInviteInput = document.getElementById('inviteCodeInput');
    this.elStudentNameInput = document.getElementById('studentNameInput');
    this.elRollNoInput = document.getElementById('rollNoInput');
    this.elUserDeptSelect = document.getElementById('userDeptSelect');
    this.elUserSemSelect = document.getElementById('userSemSelect');
    this.elGatewayError = document.getElementById('gatewayError');
    this.elBtnUnlock = document.getElementById('btnUnlock');

    this.elHeaderServerName = document.getElementById('headerServerName');
    this.elHeaderUserInfo = document.getElementById('headerUserInfo');
    this.elRoleBadge = document.getElementById('roleBadge');
    this.elBtnModQueue = document.getElementById('btnModQueue');
    this.elModBadgeCount = document.getElementById('modBadgeCount');
    this.elBtnAdminHandover = document.getElementById('btnAdminHandover');

    this.elSubjectsContainer = document.getElementById('subjectsContainer');
    this.elMarketplaceGrid = document.getElementById('marketplaceGrid');
    this.elConnectFeedList = document.getElementById('connectFeedList');
    this.elEventsList = document.getElementById('eventsList');
    this.elAnnouncementsList = document.getElementById('announcementsList');

    this.elModDrawer = document.getElementById('modDrawer');
    this.elModPendingList = document.getElementById('modPendingList');
    this.elBtnCloseModDrawer = document.getElementById('btnCloseModDrawer');

    this.elModalUpload = document.getElementById('modalUpload');
    this.elBtnFabUpload = document.getElementById('btnFabUpload');
    this.elFormUpload = document.getElementById('formUpload');
    this.elBtnCancelUpload = document.getElementById('btnCancelUpload');

    this.elModalMarket = document.getElementById('modalMarket');
    this.elBtnPostMarket = document.getElementById('btnPostMarket');
    this.elFormMarket = document.getElementById('formMarket');
    this.elBtnCancelMarket = document.getElementById('btnCancelMarket');
    this.elBtnToggleDeptScope = document.getElementById('btnToggleDeptScope');

    this.elModalPollPost = document.getElementById('modalPollPost');
    this.elBtnNewPollPost = document.getElementById('btnNewPollPost');
    this.elFormPollPost = document.getElementById('formPollPost');
    this.elBtnCancelPollPost = document.getElementById('btnCancelPollPost');
    this.elBtnToggleConnectDeptScope = document.getElementById('btnToggleConnectDeptScope');

    this.elModalAdminHandover = document.getElementById('modalAdminHandover');
    this.elFormAdminHandover = document.getElementById('formAdminHandover');
    this.elBtnCancelHandover = document.getElementById('btnCancelHandover');
  }

  bindEvents() {
    // Unlock Gateway
    this.elBtnUnlock.addEventListener('click', () => this.handleUnlock());

    // Role Toggle
    this.elRoleBadge.addEventListener('click', () => {
      this.store.userRole = this.store.userRole === 'student' ? 'dept_mod' : 'student';
      this.saveStore();
      this.renderHeader();
      this.renderModQueue();
    });

    // Admin Handover Modal
    this.elBtnAdminHandover.addEventListener('click', () => {
      this.elModalAdminHandover.classList.add('open');
    });
    this.elBtnCancelHandover.addEventListener('click', () => {
      this.elModalAdminHandover.classList.remove('open');
    });
    this.elFormAdminHandover.addEventListener('submit', (e) => {
      e.preventDefault();
      const newName = document.getElementById('hoName').value.trim();
      const newRoll = document.getElementById('hoRoll').value.trim();
      if (newName && newRoll) {
        alert(`👑 Server Admin Rights successfully transferred to ${newName} (${newRoll})!`);
        this.elModalAdminHandover.classList.remove('open');
      }
    });

    // Dept Pills
    document.querySelectorAll('.dept-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        document.querySelectorAll('.dept-pill').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        this.store.activeDept = e.target.dataset.dept;
        this.saveStore();
        this.renderAcademic();
        this.renderMarketplace();
        this.renderConnectFeed();
      });
    });

    // Material Filter Tabs (EduVault)
    document.querySelectorAll('.mat-type-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.mat-type-btn').forEach(b => {
          b.classList.remove('active');
          b.style.background = 'var(--card-bg)';
          b.style.color = 'var(--text-secondary)';
        });
        e.target.classList.add('active');
        e.target.style.background = 'var(--card-bg)';
        e.target.style.color = 'var(--text-primary)';
        this.store.activeMaterialType = e.target.dataset.type;
        this.renderAcademic();
      });
    });

    // Semester Buttons
    document.querySelectorAll('.sem-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.sem-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.store.activeSem = parseInt(e.target.dataset.sem);
        this.saveStore();
        this.renderAcademic();
      });
    });

    // Bottom Nav Tabs
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const targetTab = e.currentTarget.dataset.tab;
        document.querySelectorAll('.bottom-nav .nav-item').forEach(i => i.classList.remove('active'));
        document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));

        e.currentTarget.classList.add('active');
        document.getElementById(`tab-${targetTab}`).classList.add('active');
      });
    });

    // Dept Bazaar Scoping Toggle
    if (this.elBtnToggleDeptScope) {
      this.elBtnToggleDeptScope.addEventListener('click', () => {
        this.store.deptBazaarOnlyMyDept = !this.store.deptBazaarOnlyMyDept;
        this.elBtnToggleDeptScope.textContent = this.store.deptBazaarOnlyMyDept
          ? `⚡ Only My Dept (${this.store.activeDept})`
          : `🌐 All Departments`;
        this.renderMarketplace();
      });
    }

    // Campus Connect Scoping Toggle
    if (this.elBtnToggleConnectDeptScope) {
      this.elBtnToggleConnectDeptScope.addEventListener('click', () => {
        this.store.connectOnlyMyDept = !this.store.connectOnlyMyDept;
        this.elBtnToggleConnectDeptScope.textContent = this.store.connectOnlyMyDept
          ? `⚡ Only My Dept (${this.store.activeDept})`
          : `🌐 All Departments`;
        this.renderConnectFeed();
      });
    }

    // Mod Drawer Toggle
    this.elBtnModQueue.addEventListener('click', () => this.elModDrawer.classList.add('open'));
    this.elBtnCloseModDrawer.addEventListener('click', () => this.elModDrawer.classList.remove('open'));

    // Upload Modal (EduVault)
    this.elBtnFabUpload.addEventListener('click', () => this.elModalUpload.classList.add('open'));
    this.elBtnCancelUpload.addEventListener('click', () => this.elModalUpload.classList.remove('open'));
    this.elFormUpload.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleUploadSubmit();
    });

    // Post Market Item Modal (Dept Bazaar)
    this.elBtnPostMarket.addEventListener('click', () => this.elModalMarket.classList.add('open'));
    this.elBtnCancelMarket.addEventListener('click', () => this.elModalMarket.classList.remove('open'));
    this.elFormMarket.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleMarketSubmit();
    });

    // Poll / Post Modal (Campus Connect)
    if (this.elBtnNewPollPost) {
      this.elBtnNewPollPost.addEventListener('click', () => this.elModalPollPost.classList.add('open'));
    }
    if (this.elBtnCancelPollPost) {
      this.elBtnCancelPollPost.addEventListener('click', () => this.elModalPollPost.classList.remove('open'));
    }
    if (this.elFormPollPost) {
      this.elFormPollPost.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handlePollSubmit();
      });
    }
  }

  handleUnlock() {
    const code = this.elInviteInput.value.trim().toUpperCase();
    const name = this.elStudentNameInput.value.trim();
    const roll = this.elRollNoInput.value.trim();
    const dept = this.elUserDeptSelect.value;
    const sem = parseInt(this.elUserSemSelect.value);

    if (VALID_SERVERS[code] || code.length >= 4) {
      this.store.isUnlocked = true;
      this.store.serverCode = code;
      this.store.serverName = VALID_SERVERS[code] || `${code} Campus Server`;
      if (name) this.store.studentName = name;
      if (roll) this.store.rollNo = roll;
      this.store.activeDept = dept;
      this.store.activeSem = sem;

      this.saveStore();
      this.elGatewayModal.style.display = 'none';
      this.renderAll();
    } else {
      this.elGatewayError.style.display = 'block';
    }
  }

  handleUploadSubmit() {
    const title = document.getElementById('upTitle').value.trim();
    const type = document.getElementById('upType').value;
    const author = document.getElementById('upAuthor').value.trim();

    if (!title || !author) return;

    this.store.pendingUploads.push({
      id: 'p_' + Date.now(),
      dept: this.store.activeDept,
      sem: this.store.activeSem,
      subjectName: 'General Subject',
      title,
      type,
      uploader: author,
      date: new Date().toISOString().split('T')[0]
    });

    this.saveStore();
    this.elFormUpload.reset();
    this.elModalUpload.classList.remove('open');
    alert('✅ Material submitted! Your Dept Moderator will review and publish it.');
    this.renderModQueue();
  }

  handleMarketSubmit() {
    const title = document.getElementById('mkTitle').value.trim();
    const price = parseInt(document.getElementById('mkPrice').value);
    const dept = document.getElementById('mkDeptSelect').value;
    const sellerName = document.getElementById('mkSellerName').value.trim();
    const sellerPhone = document.getElementById('mkSellerPhone').value.trim();

    if (!title || !price || !sellerName || !sellerPhone) return;

    this.store.marketplace.unshift({
      id: 'mk_' + Date.now(),
      title,
      dept,
      price,
      condition: 'Good',
      sellerName,
      sellerPhone,
      icon: '📦'
    });

    this.saveStore();
    this.elFormMarket.reset();
    this.elModalMarket.classList.remove('open');
    alert('✅ Item published to Dept Bazaar!');
    this.renderMarketplace();
  }

  handlePollSubmit() {
    const title = document.getElementById('pollTitleInput').value.trim();
    const opt1 = document.getElementById('pollOpt1Input').value.trim();
    const opt2 = document.getElementById('pollOpt2Input').value.trim();
    const author = document.getElementById('pollAuthorInput').value.trim();

    if (!title || !opt1 || !opt2 || !author) return;

    this.store.connectPosts.unshift({
      id: 'cp_' + Date.now(),
      type: 'poll',
      author,
      dept: this.store.activeDept,
      date: 'Just Now',
      title: '📊 Poll: ' + title,
      options: [
        { text: opt1, votes: 1 },
        { text: opt2, votes: 0 }
      ],
      userVoted: 0,
      totalVotes: 1,
      answers: []
    });

    this.saveStore();
    this.elFormPollPost.reset();
    this.elModalPollPost.classList.remove('open');
    alert('✅ Live Poll published to Campus Connect!');
    this.renderConnectFeed();
  }

  votePoll(postId, optionIdx) {
    const post = this.store.connectPosts.find(p => p.id === postId);
    if (post && post.type === 'poll' && post.userVoted === null) {
      post.options[optionIdx].votes += 1;
      post.totalVotes += 1;
      post.userVoted = optionIdx;
      this.saveStore();
      this.renderConnectFeed();
    }
  }

  addAnswer(postId, text) {
    const post = this.store.connectPosts.find(p => p.id === postId);
    if (post && text) {
      post.answers.push({
        author: `${this.store.studentName} (${this.store.activeDept})`,
        text: text
      });
      this.saveStore();
      this.renderConnectFeed();
    }
  }

  renderAll() {
    if (!this.store.isUnlocked) {
      this.elGatewayModal.style.display = 'flex';
      return;
    }
    this.elGatewayModal.style.display = 'none';

    this.renderHeader();
    this.renderAcademic();
    this.renderMarketplace();
    this.renderConnectFeed();
    this.renderEvents();
    this.renderAnnouncements();
    this.renderModQueue();
  }

  renderHeader() {
    this.elHeaderServerName.textContent = this.store.serverName;
    this.elHeaderUserInfo.textContent = `${this.store.studentName} • ${this.store.activeDept} • Reg #${this.store.rollNo}`;

    if (this.store.userRole === 'dept_mod') {
      this.elRoleBadge.textContent = '🛡️ Dept Mod';
      this.elRoleBadge.style.background = 'rgba(239, 68, 68, 0.15)';
      this.elRoleBadge.style.color = '#EF4444';
      this.elRoleBadge.style.border = '1px solid rgba(239, 68, 68, 0.3)';
      this.elBtnModQueue.style.display = 'flex';
    } else {
      this.elRoleBadge.textContent = '👨‍🎓 Student';
      this.elRoleBadge.style.background = 'rgba(16, 185, 129, 0.15)';
      this.elRoleBadge.style.color = '#10B981';
      this.elRoleBadge.style.border = '1px solid rgba(16, 185, 129, 0.3)';
      this.elBtnModQueue.style.display = 'none';
    }
  }

  renderAcademic() {
    const key = `${this.store.activeDept}_Sem${this.store.activeSem}`;
    const subjectList = this.store.subjects[key] || [];
    const matTypeFilter = this.store.activeMaterialType || 'ALL';

    if (subjectList.length === 0) {
      this.elSubjectsContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 8px;">📭</div>
          <p style="font-weight: 600;">No notes uploaded for ${this.store.activeDept} Sem ${this.store.activeSem} yet.</p>
          <p style="font-size: 0.8rem; margin-top: 4px;">Be the first to upload class notes or PYQs!</p>
        </div>
      `;
      return;
    }

    this.elSubjectsContainer.innerHTML = subjectList.map(sub => {
      let filteredMats = sub.materials;
      if (matTypeFilter !== 'ALL') {
        filteredMats = sub.materials.filter(m => m.type === matTypeFilter);
      }

      const matHTML = filteredMats.length === 0
        ? `<div style="font-size: 0.8rem; color: var(--text-muted); padding: 8px 0;">No ${matTypeFilter} files uploaded for this subject yet.</div>`
        : filteredMats.map(m => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: var(--app-bg); border-radius: 8px; margin-top: 8px;">
              <div>
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">${m.title}</div>
                <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">
                  <span style="background: rgba(56, 189, 248, 0.15); color: #38BDF8; padding: 2px 6px; border-radius: 4px; font-weight: 700;">${m.type}</span>
                  • By ${m.author} • 📥 ${m.downloads} downloads
                </div>
              </div>
              <button onclick="alert('📥 Downloading PDF note...')" class="btn-primary" style="padding: 6px 10px; font-size: 0.72rem;">Download</button>
            </div>
          `).join('');

      return `
        <div style="background: var(--card-bg); border-radius: var(--radius-md); padding: 16px; margin-bottom: 14px; border: 1px solid var(--border-color);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <h3 style="font-size: 1rem; font-weight: 800; color: var(--accent-sky);">${sub.code} - ${sub.name}</h3>
            <span style="font-size: 0.72rem; color: var(--text-muted);">${filteredMats.length} files</span>
          </div>
          <div style="margin-top: 10px;">${matHTML}</div>
        </div>
      `;
    }).join('');
  }

  renderMarketplace() {
    let items = this.store.marketplace;
    if (this.store.deptBazaarOnlyMyDept) {
      items = items.filter(i => i.dept === this.store.activeDept);
    }

    if (items.length === 0) {
      this.elMarketplaceGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 8px;">🛍️</div>
          <p style="font-weight: 600;">No items posted for ${this.store.activeDept} department yet.</p>
        </div>
      `;
      return;
    }

    this.elMarketplaceGrid.innerHTML = items.map(item => `
      <div style="background: var(--card-bg); border-radius: var(--radius-md); padding: 14px; border: 1px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="font-size: 2.2rem; text-align: center; margin-bottom: 8px;">${item.icon}</div>
          <div style="font-size: 0.88rem; font-weight: 800; color: var(--text-primary);">${item.title}</div>
          <div style="display: flex; gap: 6px; margin-top: 6px;">
            <span style="font-size: 0.7rem; background: rgba(16, 185, 129, 0.15); color: #10B981; padding: 2px 6px; border-radius: 4px; font-weight: 700;">${item.dept}</span>
            <span style="font-size: 0.7rem; background: rgba(56, 189, 248, 0.15); color: #38BDF8; padding: 2px 6px; border-radius: 4px;">${item.condition}</span>
          </div>
          <div style="font-size: 1.1rem; font-weight: 900; color: var(--accent-amber); margin-top: 8px;">₹${item.price}</div>
          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">Seller: ${item.sellerName}</div>
        </div>
        <a href="https://wa.me/91${item.sellerPhone}?text=Hi%20${encodeURIComponent(item.sellerName)},%20I%20saw%20your%20item%20${encodeURIComponent(item.title)}%20on%20CampusSphere!" target="_blank" class="btn-primary" style="display: block; text-align: center; text-decoration: none; padding: 8px; font-size: 0.78rem; margin-top: 12px; background: #25D366; color: white;">📱 WhatsApp Seller</a>
      </div>
    `).join('');
  }

  renderConnectFeed() {
    if (!this.elConnectFeedList) return;

    let posts = this.store.connectPosts;
    if (this.store.connectOnlyMyDept) {
      posts = posts.filter(p => p.dept === this.store.activeDept);
    }

    if (posts.length === 0) {
      this.elConnectFeedList.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 8px;">💬</div>
          <p style="font-weight: 600;">No community posts for ${this.store.activeDept} department yet. Create a live poll!</p>
        </div>
      `;
      return;
    }

    this.elConnectFeedList.innerHTML = posts.map(post => {
      let pollHTML = '';
      if (post.type === 'poll') {
        pollHTML = post.options.map((opt, idx) => {
          const pct = post.totalVotes > 0 ? Math.round((opt.votes / post.totalVotes) * 100) : 0;
          const isVoted = post.userVoted === idx;
          return `
            <div onclick="window.app.votePoll('${post.id}', ${idx})" style="padding: 10px 12px; background: var(--app-bg); border-radius: 8px; margin-top: 8px; border: 1px solid ${isVoted ? '#10B981' : 'var(--border-color)'}; cursor: pointer; position: relative; overflow: hidden;">
              <div style="position: absolute; top:0; left:0; bottom:0; width: ${pct}%; background: rgba(16, 185, 129, 0.15); border-radius: 8px;"></div>
              <div style="position: relative; display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 700;">
                <span>${opt.text} ${isVoted ? '✓' : ''}</span>
                <span>${pct}% (${opt.votes})</span>
              </div>
            </div>
          `;
        }).join('');
      }

      const answersHTML = post.answers.map(ans => `
        <div style="font-size: 0.78rem; background: rgba(255,255,255,0.03); padding: 8px 10px; border-radius: 6px; margin-top: 6px; border-left: 3px solid var(--accent-sky);">
          <span style="font-weight: 700; color: var(--accent-sky);">${ans.author}:</span> ${ans.text}
        </div>
      `).join('');

      return `
        <div style="background: var(--card-bg); border-radius: var(--radius-md); padding: 16px; margin-bottom: 14px; border: 1px solid var(--border-color);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted);">${post.author} • ${post.dept}</div>
            <div style="font-size: 0.7rem; color: var(--text-muted);">${post.date}</div>
          </div>
          <h3 style="font-size: 0.95rem; font-weight: 800; color: var(--text-primary); margin-top: 6px;">${post.title}</h3>
          ${pollHTML}
          <div style="margin-top: 12px; font-size: 0.75rem; font-weight: 700; color: var(--text-muted);">💬 Answers & Replies (${post.answers.length}):</div>
          ${answersHTML}
          <div style="display: flex; gap: 8px; margin-top: 10px;">
            <input type="text" id="ans_input_${post.id}" class="form-input" placeholder="Write an answer..." style="flex: 1; font-size: 0.75rem; padding: 6px 10px; text-align: left; text-transform: none; letter-spacing: normal;">
            <button onclick="
              const val = document.getElementById('ans_input_${post.id}').value.trim();
              if (val) { window.app.addAnswer('${post.id}', val); }
            " class="btn-primary" style="padding: 6px 12px; font-size: 0.75rem;">Reply</button>
          </div>
        </div>
      `;
    }).join('');
  }

  renderEvents() {
    this.elEventsList.innerHTML = this.store.events.map(ev => `
      <div style="background: var(--card-bg); border-radius: var(--radius-md); padding: 16px; margin-bottom: 14px; border: 1px solid var(--border-color);">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.72rem; background: rgba(245, 158, 11, 0.15); color: #F59E0B; padding: 2px 8px; border-radius: 4px; font-weight: 700;">${ev.dept}</span>
          <span style="font-size: 0.72rem; color: var(--text-muted);">📅 ${ev.date}</span>
        </div>
        <h3 style="font-size: 1rem; font-weight: 800; color: var(--text-primary); margin-top: 6px;">${ev.title}</h3>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">${ev.desc}</p>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;">
          <div style="font-size: 0.72rem; color: var(--text-muted);">📍 ${ev.venue} • <span style="color: var(--accent-emerald); font-weight: 700;">${ev.postedBy}</span></div>
          <button onclick="alert('🎟️ Registration link coming soon!')" class="btn-primary" style="padding: 6px 12px; font-size: 0.75rem;">Register Now ➔</button>
        </div>
      </div>
    `).join('');
  }

  renderAnnouncements() {
    this.elAnnouncementsList.innerHTML = this.store.announcements.map(an => `
      <div style="background: var(--card-bg); border-radius: var(--radius-md); padding: 16px; margin-bottom: 14px; border: 1px solid var(--border-color);">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.72rem; color: var(--accent-sky); font-weight: 700;">📢 ${an.author}</span>
          <span style="font-size: 0.72rem; color: var(--text-muted);">${an.date}</span>
        </div>
        <h3 style="font-size: 0.95rem; font-weight: 800; color: var(--text-primary); margin-top: 6px;">${an.title}</h3>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px; line-height: 1.4;">${an.content}</p>
      </div>
    `).join('');
  }

  renderModQueue() {
    this.elModBadgeCount.textContent = this.store.pendingUploads.length;

    if (this.store.pendingUploads.length === 0) {
      this.elModPendingList.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted);">No pending notes awaiting approval!</p>`;
      return;
    }

    this.elModPendingList.innerHTML = this.store.pendingUploads.map((item, idx) => `
      <div style="background: var(--app-bg); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">${item.title}</div>
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">Subject: ${item.subjectName} • Uploader: ${item.uploader}</div>
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <button onclick="window.app.approveUpload(${idx})" class="btn-primary" style="padding: 4px 10px; font-size: 0.72rem; background: #10B981;">Approve</button>
          <button onclick="window.app.rejectUpload(${idx})" style="padding: 4px 10px; font-size: 0.72rem; background: none; border: 1px solid var(--accent-rose); color: var(--accent-rose); border-radius: 6px; cursor: pointer;">Reject</button>
        </div>
      </div>
    `).join('');
  }

  approveUpload(idx) {
    const item = this.store.pendingUploads.splice(idx, 1)[0];
    const key = `${item.dept}_Sem${item.sem}`;
    if (!this.store.subjects[key]) this.store.subjects[key] = [];
    if (this.store.subjects[key].length === 0) {
      this.store.subjects[key].push({ id: 'sub_' + Date.now(), code: `${item.dept}3301`, name: item.subjectName || 'Class Notes', materials: [] });
    }
    this.store.subjects[key][0].materials.push({
      id: 'm_' + Date.now(),
      title: item.title,
      type: item.type,
      author: item.uploader,
      url: '#',
      status: 'approved',
      downloads: 1
    });

    this.saveStore();
    this.renderAcademic();
    this.renderModQueue();
    alert('✅ Approved and published to EduVault!');
  }

  rejectUpload(idx) {
    this.store.pendingUploads.splice(idx, 1);
    this.saveStore();
    this.renderModQueue();
  }
}

// Global App Initialization
window.addEventListener('DOMContentLoaded', () => {
  window.app = new CampusApp();
});
