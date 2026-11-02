// demo data, all names and numbers are made up
const DB_KEYS = {
  employees: "lxx_employees",
  settings: "lxx_settings",
  payrollLog: "lxx_payroll_log",
};

const SEED_EMPLOYEES = [
  {
    id: "EMP-001",
    name: "Chong Ah Zhu",
    ic: "000001-00-0001",
    email: "chong.ahzhu@lxx.example",
    phone: "+60 12-000 0001",
    dept: "Management",
    pos: "Store Manager",
    salary: 7500,
    transport: 500,
    allowance: 400,
    join: "2015-03-01",
    bank: "Maybank",
    acc: "1142086357",
    status: "active",
    type: "Full-time",
    religion: "Non-Muslim",
  },
  {
    id: "EMP-002",
    name: "Wong Kau Tim",
    ic: "000002-00-0002",
    email: "wong.kautim@lxx.example",
    phone: "+60 11-000 0002",
    dept: "Sales",
    pos: "Sales Manager",
    salary: 5800,
    transport: 400,
    allowance: 300,
    join: "2018-06-01",
    bank: "CIMB",
    acc: "7630514928",
    status: "active",
    type: "Full-time",
    religion: "Non-Muslim",
  },
  {
    id: "EMP-003",
    name: "Tan Bak Kut",
    ic: "000003-00-0003",
    email: "tan.bakkut@lxx.example",
    phone: "+60 16-000 0003",
    dept: "Technical",
    pos: "Technician",
    salary: 3200,
    transport: 200,
    allowance: 150,
    join: "2020-01-15",
    bank: "Public Bank",
    acc: "3389152046",
    status: "active",
    type: "Full-time",
    religion: "Non-Muslim",
  },
  {
    id: "EMP-004",
    name: "Ali Baba bin Kasim",
    ic: "000004-00-0004",
    email: "ali.baba@lxx.example",
    phone: "+60 19-000 0004",
    dept: "Technical",
    pos: "Technician",
    salary: 3200,
    transport: 200,
    allowance: 150,
    join: "2020-05-01",
    bank: "Maybank",
    acc: "5127651681",
    status: "active",
    type: "Full-time",
    religion: "Islam",
  },
  {
    id: "EMP-005",
    name: "Raju a/l Goreng",
    ic: "000005-00-0005",
    email: "raju.goreng@lxx.example",
    phone: "+60 17-000 0005",
    dept: "Technical",
    pos: "Senior Technician",
    salary: 4000,
    transport: 250,
    allowance: 200,
    join: "2019-02-10",
    bank: "RHB",
    acc: "6904731285",
    status: "active",
    type: "Full-time",
    religion: "Non-Muslim",
  },
  {
    id: "EMP-006",
    name: "Siti Binti Kosong",
    ic: "000006-00-0006",
    email: "siti.kosong@lxx.example",
    phone: "+60 18-000 0006",
    dept: "Marketing",
    pos: "Marketing Executive",
    salary: 3500,
    transport: 200,
    allowance: 150,
    join: "2021-09-01",
    bank: "Maybank",
    acc: "1475809632",
    status: "active",
    type: "Full-time",
    religion: "Islam",
  },
  {
    id: "EMP-007",
    name: "Lim Tai Kor",
    ic: "000007-00-0007",
    email: "lim.taikor@lxx.example",
    phone: "+60 12-000 0007",
    dept: "Technical",
    pos: "Intern",
    salary: 800,
    transport: 100,
    allowance: 0,
    join: "2023-01-02",
    bank: "CIMB",
    acc: "8261347590",
    status: "active",
    type: "Intern",
    religion: "Non-Muslim",
  },
  {
    id: "EMP-008",
    name: "Muthu a/l Potato",
    ic: "000008-00-0008",
    email: "muthu.potato@lxx.example",
    phone: "+60 11-000 0008",
    dept: "Sales",
    pos: "Intern",
    salary: 800,
    transport: 100,
    allowance: 0,
    join: "2023-01-02",
    bank: "Public Bank",
    acc: "2024012963",
    status: "active",
    type: "Intern",
    religion: "Non-Muslim",
  },
  {
    id: "EMP-009",
    name: "Ng Mee Goreng",
    ic: "000009-00-0009",
    email: "ng.meegoreng@lxx.example",
    phone: "+60 13-000 0009",
    dept: "Marketing",
    pos: "Intern",
    salary: 800,
    transport: 100,
    allowance: 0,
    join: "2023-01-02",
    bank: "Maybank",
    acc: "4718293056",
    status: "active",
    type: "Intern",
    religion: "Non-Muslim",
  },
];

const SEED_SETTINGS = {
  company: "LXX Sdn. Bhd.",
  ssm: "1234567-A",
  epf: "E000123456",
  socso: "S000456789",
  lhdn: "E1234567890",
  hrd: "HR12345",
  payCycle: "Monthly (end of month)",
  payslipLang: "en",
  bankFormat: "Maybank IBG",
  lang: "en",
};

// localStorage
function dbGet(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return null;
  }
}
function dbSet(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
}
function dbInit() {
  if (!dbGet(DB_KEYS.employees)) dbSet(DB_KEYS.employees, SEED_EMPLOYEES);
  if (!dbGet(DB_KEYS.settings)) dbSet(DB_KEYS.settings, SEED_SETTINGS);
  if (!dbGet(DB_KEYS.payrollLog)) dbSet(DB_KEYS.payrollLog, []);
}
function getEmployees() {
  return dbGet(DB_KEYS.employees) || SEED_EMPLOYEES;
}
function saveEmployees(arr) {
  dbSet(DB_KEYS.employees, arr);
}
function getSettings() {
  return dbGet(DB_KEYS.settings) || SEED_SETTINGS;
}
function saveSettingsDB(obj) {
  dbSet(DB_KEYS.settings, obj);
}
function getPayrollLog() {
  return dbGet(DB_KEYS.payrollLog) || [];
}
function logPayroll(entry) {
  const log = getPayrollLog();
  log.unshift(entry);
  if (log.length > 200) log.pop();
  dbSet(DB_KEYS.payrollLog, log);
}
function nextEmpId() {
  const nums = getEmployees().map((e) => parseInt(e.id.replace("EMP-", "")) || 0);
  return "EMP-" + String(Math.max(0, ...nums) + 1).padStart(3, "0");
}
function resetDB() {
  if (!confirm("Reset all data to demo defaults? This cannot be undone.")) return;
  Object.values(DB_KEYS).forEach((k) => localStorage.removeItem(k));
  dbInit();
  employees = getEmployees();
  loadSettingsIntoForm();
  refreshAll();
  refreshDBStatus();
  showToast("Database reset to demo data", "info");
}

let employees = [];
let currentCalcData = {};
let editIdx = null;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const BANK_CODES = { Maybank: "0227", CIMB: "0417", "Public Bank": "0146", RHB: "0484" };
const deptColors = {
  Management: "badge-orange",
  Sales: "badge-green",
  Technical: "badge-blue",
  Marketing: "badge-amber",
  Intern: "badge-gray",
};
const avatarColors = ["#164396", "#5836a5", "#168146", "#b85312", "#03706f", "#8a6100", "#c93a32", "#374151"];

// statutory rates 2023, socso and eis stop at RM 5,000
function payFor(e) {
  const gross = e.salary + e.transport + e.allowance;
  const capped = Math.min(gross, 5000);
  const p = {
    gross,
    epfEE: gross * 0.11,
    socsoEE: capped * 0.005,
    eisEE: capped * 0.002,
    pcb: estimatePCB(gross),
    epfER: gross * (e.salary <= 5000 ? 0.13 : 0.12),
    socsoER: capped * 0.0175,
    eisER: capped * 0.004,
  };
  p.net = gross - p.epfEE - p.socsoEE - p.eisEE - p.pcb;
  p.cost = gross + p.epfER + p.socsoER + p.eisER;
  return p;
}

// rough yearly tax bands, not the full LHDN table
function estimatePCB(gross) {
  const annual = gross * 12;
  if (annual <= 20000) return 0;
  if (annual <= 35000) return Math.max(0, (annual * 0.03 - 150) / 12);
  if (annual <= 50000) return Math.max(0, (annual * 0.08 - 950) / 12);
  if (annual <= 70000) return Math.max(0, (annual * 0.13 - 2250) / 12);
  if (annual <= 100000) return Math.max(0, (annual * 0.21 - 7800) / 12);
  return Math.max(0, (annual * 0.24 - 10800) / 12);
}

// login
let loginRole = "admin";
function setLoginTab(role, el) {
  loginRole = role;
  setActiveTab(el);
  document.getElementById("loginEmail").value = role === "admin" ? "admin@lxx.example" : "chong.ahzhu@lxx.example";
}
let meIdx = null;
function doLogin() {
  dbInit();
  employees = getEmployees();
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("app").style.display = "flex";
  loadSettingsIntoForm();
  refreshAll();
  calcPayroll();
  if (loginRole === "employee") {
    meIdx = Math.max(0, employees.findIndex((e) => e.email === document.getElementById("loginEmail").value.trim()));
    const me = employees[meIdx];
    document.getElementById("app").classList.add("employee-mode");
    document.getElementById("sidebarName").textContent = me.name;
    document.getElementById("sidebarRole").textContent = "Employee";
    document.getElementById("sidebarAvatar").textContent = initials(me.name);
    viewPayslipFor(meIdx);
  } else {
    nav("dashboard", document.querySelector(".nav-item"));
  }
}
function doLogout() {
  document.getElementById("app").style.display = "none";
  document.getElementById("loginScreen").style.display = "flex";
  document.getElementById("app").classList.remove("employee-mode");
  meIdx = null;
  document.getElementById("sidebarName").textContent = "HR Admin";
  document.getElementById("sidebarRole").textContent = "Administrator";
  document.getElementById("sidebarAvatar").textContent = "HR";
}
const isEmployee = () => meIdx !== null;
function openMyProfile(el) {
  viewEmployee(meIdx);
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  el.classList.add("active");
}

// pages
const pageMeta = {
  dashboard: { title: "Dashboard", breadcrumb: "Overview", btn: "+ New Employee" },
  employees: { title: "Employees", breadcrumb: "People Management", btn: "+ Add Employee" },
  runpayroll: { title: "Run Payroll", breadcrumb: "Payroll Calculator", btn: "Generate Payslip" },
  payslip: { title: "Payslips", breadcrumb: "Slip Gaji", btn: "Download HTML" },
  reports: { title: "Reports & Export", breadcrumb: "Compliance", btn: "Export CSV" },
  settings: { title: "Settings", breadcrumb: "System Configuration", btn: "Save Changes" },
  "employee-view": { title: "Employee Profile", breadcrumb: "Employees / Profile", btn: "Edit Employee" },
};
function nav(id, el) {
  if (isEmployee() && id !== "payslip" && id !== "employee-view") {
    id = "payslip";
    el = document.getElementById("navPayslip");
  }
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  document.getElementById("page-" + id).classList.add("active");
  if (el) el.classList.add("active");
  const meta = isEmployee() ? { payslip: { title: "My Payslip", breadcrumb: "Slip Gaji" }, "employee-view": { title: "My Profile", breadcrumb: "Personal details" } }[id] : pageMeta[id];
  document.getElementById("pageTitle").textContent = meta.title;
  document.getElementById("pageBreadcrumb").textContent = meta.breadcrumb;
  document.getElementById("topActionBtn").textContent = meta.btn || "";
}
function topAction() {
  const id = document.querySelector(".page.active").id.replace("page-", "");
  if (id === "dashboard" || id === "employees") openAddEmpModal();
  else if (id === "runpayroll") {
    nav("payslip", document.querySelector("[onclick*=payslip]"));
    buildPayslip();
  } else if (id === "payslip") exportPayslipHTML();
  else if (id === "reports") exportPayrollCSV();
  else if (id === "settings") saveSettings();
  else if (id === "employee-view") openEditEmpModal(Number(document.getElementById("ev-status").dataset.idx));
}
function setActiveTab(el) {
  el.parentElement.querySelectorAll(".tab, .login-tab").forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
}
function refreshAll() {
  renderEmployees(employees);
  populateEmpSelect();
  updateDashboard();
}

// employees
function renderEmployees(list) {
  document.getElementById("empTbody").innerHTML = list
    .map((e) => {
      const i = employees.indexOf(e);
      const status = (v, label) => `<option value="${v}" ${e.status === v ? "selected" : ""}>${label}</option>`;
      return `
    <tr onclick="viewEmployee(${i})">
      <td>
        <div class="emp-cell">
          <span class="avatar" style="background:${avatarColors[i % avatarColors.length]}">${initials(e.name)}</span>
          <div><b>${e.name}</b><small>${e.id}</small></div>
        </div>
      </td>
      <td class="nowrap">${e.ic}</td>
      <td><span class="badge ${deptColors[e.dept] || "badge-gray"}">${e.dept}</span></td>
      <td>${e.pos}</td>
      <td class="num">RM ${e.salary.toLocaleString()}</td>
      <td class="nowrap">${fmtDate(e.join)}</td>
      <td>
        <select class="status-select" onchange="changeEmpStatus(${i},this.value)" onclick="event.stopPropagation()">
          ${status("active", "Aktif")}${status("leave", "Cuti")}${status("resigned", "Berhenti")}
        </select>
      </td>
      <td class="act" onclick="event.stopPropagation()">
        <button class="btn btn-sm btn-ghost" onclick="viewEmployee(${i})">View</button>
        <button class="btn btn-sm btn-ghost" onclick="loadEmpPayroll(${i})">Payroll</button>
        <button class="btn btn-sm btn-ghost" onclick="openEditEmpModal(${i})">Edit</button>
        <button class="btn btn-sm btn-ghost btn-danger" onclick="deleteEmployee(${i})">Delete</button>
      </td>
    </tr>`;
    })
    .join("");
  document.getElementById("empBadge").textContent = employees.length;
}
function filterEmp(status, el) {
  setActiveTab(el);
  employees = getEmployees();
  renderEmployees(status === "all" ? employees : employees.filter((e) => e.status === status));
}
function searchEmp(q) {
  q = q.trim().toLowerCase();
  employees = getEmployees();
  renderEmployees(
    employees.filter((e) => [e.name, e.ic, e.id, e.dept].some((v) => v.toLowerCase().includes(q))),
  );
}
function viewEmployee(idx) {
  if (isEmployee()) idx = meIdx;
  const e = employees[idx];
  const set = (id, val) => (document.getElementById(id).textContent = val);
  set("ev-avatar", initials(e.name));
  set("ev-name", e.name);
  set("ev-pos", e.pos + " · " + e.dept);
  set("ev-type", e.type);
  set("ev-ic", e.ic);
  set("ev-email", e.email);
  set("ev-phone", e.phone);
  set("ev-bank", e.bank);
  set("ev-acc", e.acc);
  set("ev-salary", "RM " + e.salary.toLocaleString());
  const evStatus = document.getElementById("ev-status");
  evStatus.value = e.status || "active";
  evStatus.dataset.idx = idx;

  // same pay every month for the demo history
  const p = payFor(e);
  const money = (n) => "RM " + n.toFixed(2);
  document.getElementById("ev-payhistory").innerHTML = ["Feb 2023", "Jan 2023", "Dec 2022", "Nov 2022"]
    .map(
      (m) => `<tr><td>${m}</td><td class="num">${money(p.gross)}</td><td class="num neg">${money(p.epfEE)}</td>
        <td class="num neg">${money(p.socsoEE)}</td><td class="num neg">${money(p.pcb)}</td><td class="num pos">${money(p.net)}</td>
        <td class="act"><button class="btn btn-sm btn-ghost" onclick="viewPayslipFor(${idx})">Slip</button></td></tr>`,
    )
    .join("");
  nav("employee-view", null);
}
function loadEmpPayroll(idx) {
  document.getElementById("calcEmp").value = idx;
  pickCalcEmp();
  nav("runpayroll", document.querySelector('[onclick*="runpayroll"]'));
}
function changeEmpStatus(idx, status) {
  const e = employees[Number(idx)];
  if (!e) return;
  e.status = status;
  saveEmployees(employees);
  const labels = { active: "Aktif", leave: "Cuti", resigned: "Berhenti" };
  showToast(e.name + ": " + labels[status], "success");
  updateDashboard();
}

// add / edit modal, field ids are ne-<field>
const EMP_FIELDS = ["name", "ic", "email", "phone", "dept", "pos", "salary", "transport", "allowance", "join", "bank", "acc", "type", "religion"];
function openModal(id) {
  document.getElementById(id).classList.add("open");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}
function fillEmpForm(e) {
  EMP_FIELDS.forEach((f) => {
    const el = document.getElementById("ne-" + f);
    if (e[f] !== undefined) el.value = e[f];
    else if (el.tagName === "SELECT") el.selectedIndex = 0;
    else el.value = f === "join" ? "2023-03-01" : "";
  });
}
function readEmpForm() {
  const v = (f) => document.getElementById("ne-" + f).value.trim();
  return {
    name: v("name"),
    ic: v("ic") || "—",
    email: v("email"),
    phone: v("phone"),
    dept: v("dept"),
    pos: v("pos") || "Staff",
    salary: parseFloat(v("salary")) || 3000,
    transport: parseFloat(v("transport")) || 0,
    allowance: parseFloat(v("allowance")) || 0,
    join: v("join"),
    bank: v("bank"),
    acc: v("acc") || "—",
    type: v("type"),
    religion: v("religion"),
  };
}
function openAddEmpModal() {
  editIdx = null;
  fillEmpForm({});
  document.querySelector("#modalAddEmp .modal-title").textContent = t("addNewEmp");
  document.getElementById("empSaveBtn").textContent = t("saveEmp");
  openModal("modalAddEmp");
}
function openEditEmpModal(idx) {
  editIdx = idx;
  fillEmpForm(employees[idx]);
  document.querySelector("#modalAddEmp .modal-title").textContent = "Edit Employee";
  document.getElementById("empSaveBtn").textContent = "Update Employee";
  openModal("modalAddEmp");
}
function saveEmployee() {
  const data = readEmpForm();
  if (!data.name) {
    showToast("Please enter the employee name", "info");
    return;
  }
  if (editIdx === null) employees.push({ id: nextEmpId(), status: "active", ...data });
  else employees[editIdx] = { ...employees[editIdx], ...data };
  saveEmployees(employees);
  refreshAll();
  closeModal("modalAddEmp");
  showToast(data.name + (editIdx === null ? " added" : " updated"), "success");
}
function deleteEmployee(idx) {
  const e = employees[idx];
  if (!confirm("Delete " + e.name + "? This cannot be undone.")) return;
  employees.splice(idx, 1);
  saveEmployees(employees);
  refreshAll();
  nav("employees", document.querySelector("[onclick*=employees]"));
  showToast(e.name + " removed", "info");
}

// run payroll
function populateEmpSelect() {
  document.getElementById("calcEmp").innerHTML =
    '<option value="">Select employee</option>' +
    employees.map((e, i) => `<option value="${i}">${e.name} (${e.id})</option>`).join("");
}
function pickCalcEmp() {
  const idx = document.getElementById("calcEmp").value;
  if (idx === "") return;
  const e = employees[idx];
  document.getElementById("cBasic").value = e.salary;
  document.getElementById("cTransport").value = e.transport;
  document.getElementById("cAllowance").value = e.allowance;
  ["cOT", "cBonus", "cUnpaid"].forEach((id) => (document.getElementById(id).value = 0));
  calcPayroll();
}
function fmt(n) {
  return "RM " + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function calcPayroll() {
  const num = (id) => parseFloat(document.getElementById(id).value) || 0;
  const on = (id) => document.getElementById(id).checked;
  const basic = num("cBasic");
  const transport = num("cTransport");
  const allow = num("cAllowance");
  const ot = num("cOT");
  const bonus = num("cBonus");
  const unpaid = num("cUnpaid");

  const gross = basic + transport + allow + ot + bonus;
  const capped = Math.min(gross, 5000);
  const epfEE = on("chkEpf") ? gross * 0.11 : 0;
  const socsoEE = on("chkSocso") ? capped * 0.005 : 0;
  const eisEE = on("chkEis") ? capped * 0.002 : 0;
  const pcb = on("chkPcb") ? estimatePCB(gross) : 0;
  const net = gross - epfEE - socsoEE - eisEE - pcb - unpaid;
  const epfER = on("chkEpf") ? gross * (basic <= 5000 ? 0.13 : 0.12) : 0;
  const socsoER = on("chkSocso") ? capped * 0.0175 : 0;
  const eisER = on("chkEis") ? capped * 0.004 : 0;
  const totalCost = gross + epfER + socsoER + eisER;

  const show = {
    "r-basic": fmt(basic),
    "r-transport": fmt(transport),
    "r-allow": fmt(allow),
    "r-ot": fmt(ot),
    "r-bonus": fmt(bonus),
    "r-gross": fmt(gross),
    "r-epfEE": "- " + fmt(epfEE),
    "r-socso": "- " + fmt(socsoEE),
    "r-eis": "- " + fmt(eisEE),
    "r-pcb": "- " + fmt(pcb),
    "r-unpaid": "- " + fmt(unpaid),
    "r-net": fmt(net),
    "r-epfER": fmt(epfER),
    "r-socsoER": fmt(socsoER),
    "r-eisER": fmt(eisER),
    "r-totalCost": fmt(totalCost),
    "r-month": document.getElementById("calcMonth").value,
  };
  Object.entries(show).forEach(([id, val]) => (document.getElementById(id).textContent = val));

  currentCalcData = { basic, transport, allow, ot, bonus, unpaid, gross, epfEE, socsoEE, eisEE, pcb, net, epfER, socsoER, eisER };
}

// payslip
function setPayslipTab(tab, el) {
  setActiveTab(el);
  document.getElementById("payslip-preview-tab").style.display = tab === "preview" ? "block" : "none";
  document.getElementById("payslip-bulk-tab").style.display = tab === "bulk" ? "block" : "none";
}
function buildPayslip() {
  calcPayroll();
  const d = currentCalcData;
  const idx = document.getElementById("calcEmp").value;
  const e = employees[idx === "" ? 0 : idx];
  const month = document.getElementById("calcMonth").value;
  const set = (id, val) => (document.getElementById(id).textContent = val);

  injectPayslipLogo();
  set("ps-company", document.getElementById("s-company").value);
  set("ps-month", "Salary Slip — " + month);
  set("ps-net-month", month);
  set("ps-name", e.name);
  set("ps-staffno", e.id);
  set("ps-ic", e.ic);
  set("ps-dept", e.dept);
  set("ps-pos", e.pos);
  set("ps-join", fmtDate(e.join));
  set("ps-bank", e.bank);
  set("ps-acc", e.acc);
  set("ps-net", fmt(d.net));

  const earns = [["Basic Salary", d.basic], ["Transport Allowance", d.transport], ["Other Allowances", d.allow]];
  if (d.ot > 0) earns.push(["Overtime", d.ot]);
  if (d.bonus > 0) earns.push(["Bonus", d.bonus]);
  const deds = [
    ["EPF (Employee 11%)", d.epfEE],
    ["SOCSO (0.5%)", d.socsoEE],
    ["EIS (0.2%)", d.eisEE],
    ["PCB / MTD", d.pcb],
    ["Unpaid Leave", d.unpaid],
  ].filter(([, v]) => v > 0);
  const rows = (list) =>
    list.map(([k, v]) => `<div class="payslip-col-row"><span>${k}</span><span>${v.toFixed(2)}</span></div>`).join("");
  document.getElementById("ps-earn-rows").innerHTML = rows(earns);
  document.getElementById("ps-ded-rows").innerHTML = rows(deds);
  set("ps-total-earn", d.gross.toFixed(2));
  set("ps-total-ded", deds.reduce((sum, [, v]) => sum + v, 0).toFixed(2));
  set("ps-er-epf", fmt(d.epfER));
  set("ps-er-socso", fmt(d.socsoER));
  set("ps-er-eis", fmt(d.eisER));

  // salary is paid on the last day of the payroll month
  const [monthName, year] = month.split(" ");
  const lastDay = new Date(year, MONTHS.indexOf(monthName.slice(0, 3)) + 1, 0).getDate();
  set("ps-paydate", `${lastDay} ${monthName} ${year}`);

  logPayroll({ ts: new Date().toISOString(), emp: idx === "" ? "Manual Entry" : e.name, month, gross: d.gross, net: d.net });
  refreshDBStatus();
}
function generatePayslipFromView() {
  viewPayslipFor(Number(document.getElementById("ev-status").dataset.idx));
}
function viewPayslipFor(idx) {
  if (isEmployee()) idx = meIdx;
  document.getElementById("calcEmp").value = idx;
  pickCalcEmp();
  nav("payslip", document.querySelector("[onclick*=payslip]"));
  buildPayslip();
}
function injectPayslipLogo() {
  const logo = document.getElementById("ps-logo");
  logo.src = document.querySelector(".s-logo-icon img").src;
  logo.style.display = "block";
}

// print and download use their own plain css
function getPayslipCSS() {
  return `.payslip{background:#fff;color:#111;padding:32px;max-width:680px;margin:0 auto;font-family:Tahoma,Verdana,sans-serif}.payslip-head{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:16px;border-bottom:2px solid #111;margin-bottom:20px}.payslip-brand{display:flex;align-items:center;gap:12px}#ps-logo{width:44px;height:44px;border-radius:50%}.payslip-company{font-weight:700}.payslip-month{font-size:20px;font-weight:700}.payslip-company-line{font-size:13px;color:#555;margin-top:4px}.payslip-tag{font-size:11px;font-weight:700;border:2px solid #111;padding:4px 10px}.payslip-info{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:20px;font-size:12px}.payslip-info-row{display:flex;gap:4px;color:#333}.payslip-info-row strong{color:#111;min-width:100px}.payslip-cols{display:grid;grid-template-columns:1fr 1fr;border:1px solid #ccc}.payslip-cols>div+div{border-left:1px solid #ccc}.payslip-col-head{background:#f5f5f5;font-size:12px;font-weight:700;padding:8px 14px;border-bottom:1px solid #ccc}.payslip-col-row{display:flex;justify-content:space-between;padding:7px 14px;font-size:12px;border-bottom:1px solid #eee}.payslip-col-total{display:flex;justify-content:space-between;padding:8px 14px;font-size:12px;font-weight:700;border-top:1px solid #ccc;background:#f9f9f9}.payslip-net{border:2px solid #111;border-radius:8px;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;margin-top:16px}.payslip-net-label{font-size:14px;font-weight:700}.payslip-net-month{font-size:11px;color:#555}.payslip-net-value{font-size:26px;font-weight:700}.payslip-bank{margin-top:16px;font-size:11px;color:#555;line-height:1.8}.payslip-er-box{margin-top:16px;border:1px solid #ccc;padding:12px 14px;font-size:11px}.payslip-er-title{font-weight:700;margin-bottom:6px}.payslip-er-row{display:flex;justify-content:space-between;padding:2px 0}`;
}
function printPayslip() {
  const win = window.open("", "_blank");
  win.document.write(
    `<!DOCTYPE html><html><head><title>Payslip</title><style>body{padding:20px}${getPayslipCSS()}</style></head><body>${document.getElementById("payslipDoc").outerHTML}</body></html>`,
  );
  win.document.close();
  win.print();
}
function exportPayslipHTML() {
  buildPayslip();
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Payslip</title><style>body{background:#f3f4f6;padding:40px 20px}${getPayslipCSS()}</style></head><body>${document.getElementById("payslipDoc").outerHTML}</body></html>`;
  downloadFile("payslip.html", html, "text/html");
  showToast("Payslip downloaded as HTML", "success");
}

// exports
function txtHeader(title, idLine, width) {
  const company = getSettings().company;
  return `${title}\nEmployer: ${company}\n${idLine}\n${"─".repeat(width)}\n`;
}
function exportPayrollCSV() {
  let csv =
    "Employee ID,Name,IC,Department,Basic Salary,Transport,Allowance,OT,Bonus,Gross,EPF EE,SOCSO EE,EIS EE,PCB,Unpaid Leave,Net Pay,EPF ER,SOCSO ER,EIS ER,Total Cost\n";
  employees.forEach((e) => {
    const p = payFor(e);
    const n = (v) => v.toFixed(2);
    csv += `${e.id},"${e.name}",${e.ic},${e.dept},${e.salary},${e.transport},${e.allowance},0,0,${n(p.gross)},${n(p.epfEE)},${n(p.socsoEE)},${n(p.eisEE)},${n(p.pcb)},0,${n(p.net)},${n(p.epfER)},${n(p.socsoER)},${n(p.eisER)},${n(p.cost)}\n`;
  });
  downloadFile("payroll_summary_march2023.csv", csv, "text/csv");
  showToast("Payroll CSV exported", "success");
}
function exportEPFtxt() {
  const line = "─".repeat(80) + "\n";
  let txt = txtHeader("EPF FORM A — FEBRUARY 2023", "EPF Employer No: E000123456", 80);
  txt += "IC NUMBER          EMPLOYEE NAME                    EE CONTRIB   ER CONTRIB   TOTAL\n" + line;
  employees.forEach((e) => {
    const p = payFor(e);
    const ee = p.epfEE.toFixed(2);
    const er = p.epfER.toFixed(2);
    const total = (Number(ee) + Number(er)).toFixed(2);
    txt += `${e.ic.padEnd(18)} ${e.name.substring(0, 32).padEnd(32)} ${ee.padStart(10)}   ${er.padStart(10)}   ${total.padStart(10)}\n`;
  });
  downloadFile("EPF_FormA_March2023.txt", txt + line, "text/plain");
  showToast("EPF Form A .txt exported", "success");
}
function exportSOCSO() {
  const line = "─".repeat(90) + "\n";
  let txt = txtHeader("SOCSO FORM 8A + EIS — FEBRUARY 2023", "SOCSO No: S000456789", 90);
  txt += "IC NUMBER          NAME                             SOCSO EE  SOCSO ER  EIS EE  EIS ER  TOTAL\n" + line;
  employees.forEach((e) => {
    const p = payFor(e);
    const parts = [p.socsoEE, p.socsoER, p.eisEE, p.eisER].map((v) => v.toFixed(2));
    const total = parts.reduce((sum, v) => sum + Number(v), 0).toFixed(2);
    txt += `${e.ic.padEnd(18)} ${e.name.substring(0, 32).padEnd(32)} ${parts[0].padStart(8)} ${parts[1].padStart(8)} ${parts[2].padStart(6)} ${parts[3].padStart(6)} ${total.padStart(8)}\n`;
  });
  downloadFile("SOCSO_EIS_Form8A_March2023.txt", txt + line, "text/plain");
  showToast("SOCSO/EIS .txt exported", "success");
}
function exportCP39() {
  const line = "─".repeat(70) + "\n";
  let txt = txtHeader("PCB/MTD CP39 SCHEDULE — FEBRUARY 2023", "E No: E1234567890", 70);
  txt += "IC NUMBER          EMPLOYEE NAME                    MONTHLY PCB\n" + line;
  let total = 0;
  employees.forEach((e) => {
    const pcb = payFor(e).pcb.toFixed(2);
    total += Number(pcb);
    txt += `${e.ic.padEnd(18)} ${e.name.substring(0, 32).padEnd(32)} ${pcb.padStart(12)}\n`;
  });
  txt += line + `${"TOTAL".padEnd(52)} ${total.toFixed(2).padStart(12)}\n`;
  downloadFile("CP39_PCB_March2023.txt", txt, "text/plain");
  showToast("CP39 PCB .txt exported", "success");
}
function exportBankFile() {
  let txt = "## BANK PAYMENT FILE — MARCH 2023 ##\n## Maybank IBG Format ##\n\n";
  txt += "PAYMENT_DATE|ACC_NAME|ACC_NUMBER|BANK_CODE|AMOUNT|REF\n";
  employees.forEach((e) => {
    const code = BANK_CODES[e.bank] || "0000";
    txt += `31032023|${e.name}|${e.acc}|${code}|${payFor(e).net.toFixed(2)}|SAL${e.id}MAR23\n`;
  });
  downloadFile("BankPayment_March2023.txt", txt, "text/plain");
  showToast("Bank payment file exported", "success");
}
function downloadFile(name, content, type) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([content], { type }));
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

// settings
function saveSettings() {
  const s = getSettings();
  const val = (sel, old) => document.querySelector(sel).value || old;
  s.company = val("#s-company", s.company);
  s.ssm = val('[value="1234567-A"]', s.ssm);
  s.epf = val('[value="E000123456"]', s.epf);
  s.socso = val('[value="S000456789"]', s.socso);
  s.lhdn = val('[value="E1234567890"]', s.lhdn);
  saveSettingsDB(s);
  showToast("Settings saved", "success");
}
function loadSettingsIntoForm() {
  const s = getSettings();
  document.getElementById("s-company").value = s.company;
  document.getElementById("s-lang").value = s.lang || "en";
  if (s.lang && s.lang !== "en") applyLanguage(s.lang);
}
function refreshDBStatus() {
  let bytes = 0;
  Object.values(DB_KEYS).forEach((k) => (bytes += (localStorage.getItem(k) || "").length * 2));
  document.getElementById("db-emp-count").textContent = getEmployees().length;
  document.getElementById("db-log-count").textContent = getPayrollLog().length;
  document.getElementById("db-size").textContent = (bytes / 1024).toFixed(1) + " KB";
}

// dashboard
function updateDashboard() {
  const emps = getEmployees();
  let gross = 0;
  let er = 0;
  let net = 0;
  emps.forEach((e) => {
    const p = payFor(e);
    gross += p.gross;
    er += p.epfER + p.socsoER + p.eisER;
    net += p.net;
  });
  const rm = (n) => "RM " + Math.round(n).toLocaleString();
  document.querySelector(".metric-card.blue .metric-value").textContent = emps.length;
  document.querySelector(".metric-card.orange .metric-value").textContent = rm(gross);
  document.querySelector(".metric-card.amber .metric-value").textContent = rm(er);
  document.querySelector(".metric-card.green .metric-value").textContent = rm(net);
  document.getElementById("empBadge").textContent = emps.length;
}

// helpers
function initials(name) {
  return name
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}
function fmtDate(d) {
  if (!d) return "—";
  const dt = new Date(d);
  return dt.getDate() + " " + MONTHS[dt.getMonth()] + " " + dt.getFullYear();
}
function showToast(msg, type = "success") {
  const toast = document.createElement("div");
  toast.className = "toast " + type;
  toast.innerHTML = `<div class="toast-icon">${type === "success" ? "✓" : "i"}</div>${msg}`;
  document.getElementById("toastWrap").appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}
function togglePwd() {
  const input = document.getElementById("loginPass");
  const icon = document.getElementById("eyeIcon");
  const show = input.type === "password";
  input.type = show ? "text" : "password";
  icon.innerHTML = show
    ? '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'
    : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
}

// language
const LANG = {
  en: {
    dashboard: "Dashboard",
    employees: "Employees",
    runPayroll: "Run Payroll",
    payslips: "Payslips",
    reports: "Reports & Export",
    settings: "Settings",
    totalEmp: "Total Employees",
    grossPayroll: "Gross Payroll",
    empContrib: "Employer Contributions",
    netDisburse: "Net Disbursement",
    activeHeadcount: "Active headcount",
    processed: "Processed",
    signIn: "Sign In",
    adminHR: "Admin / HR",
    employee: "Employee",
    newEmp: "+ New Employee",
    addNewEmp: "Add New Employee",
    saveEmp: "Save Employee",
    cancel: "Cancel",
  },
  bm: {
    dashboard: "Papan Pemuka",
    employees: "Pekerja",
    runPayroll: "Jalankan Gaji",
    payslips: "Slip Gaji",
    reports: "Laporan & Eksport",
    settings: "Tetapan",
    totalEmp: "Jumlah Pekerja",
    grossPayroll: "Jumlah Gaji Kasar",
    empContrib: "Caruman Majikan",
    netDisburse: "Pembayaran Bersih",
    activeHeadcount: "Bilangan aktif",
    processed: "Diproses",
    signIn: "Log Masuk",
    adminHR: "Admin / HR",
    employee: "Pekerja",
    newEmp: "+ Pekerja Baru",
    addNewEmp: "Tambah Pekerja Baru",
    saveEmp: "Simpan Pekerja",
    cancel: "Batal",
  },
  zh: {
    dashboard: "仪表板",
    employees: "员工",
    runPayroll: "运行薪资",
    payslips: "薪资单",
    reports: "报表与导出",
    settings: "设置",
    totalEmp: "员工总数",
    grossPayroll: "薪资总额",
    empContrib: "雇主缴纳",
    netDisburse: "实发工资",
    activeHeadcount: "在职人数",
    processed: "已处理",
    signIn: "登录",
    adminHR: "管理员 / HR",
    employee: "员工",
    newEmp: "+ 新员工",
    addNewEmp: "添加新员工",
    saveEmp: "保存员工",
    cancel: "取消",
  },
};
let currentLang = "en";
function t(key) {
  return (LANG[currentLang] || LANG.en)[key] || LANG.en[key] || key;
}
function applyLanguage(lang) {
  currentLang = lang;
  const s = getSettings();
  s.lang = lang;
  saveSettingsDB(s);
  document.getElementById("s-lang").value = lang;

  const labels = ["totalEmp", "grossPayroll", "empContrib", "netDisburse"];
  document.querySelectorAll(".metric-label").forEach((el, i) => (el.textContent = t(labels[i])));
  const subs = document.querySelectorAll(".metric-sub");
  subs[0].innerHTML = '<span class="up">↑ 2</span> ' + t("activeHeadcount").toLowerCase();
  subs[3].innerHTML = '<span class="up">' + t("processed") + "</span> Feb 2023";

  document.querySelector(".login-btn").textContent = t("signIn");
  const tabs = document.querySelectorAll(".login-tab");
  tabs[0].textContent = t("adminHR");
  tabs[1].textContent = t("employee");
  document.getElementById("topActionBtn").textContent = t("newEmp");

  const titles = { dashboard: "dashboard", employees: "employees", runpayroll: "runPayroll", payslip: "payslips", reports: "reports", settings: "settings" };
  const page = document.querySelector(".page.active").id.replace("page-", "");
  if (titles[page]) document.getElementById("pageTitle").textContent = t(titles[page]);

  document.querySelector("#modalAddEmp .modal-title").textContent = t("addNewEmp");
  document.getElementById("empSaveBtn").textContent = t("saveEmp");
  document.querySelector("#modalAddEmp .modal-footer .btn:not(.btn-primary)").textContent = t("cancel");

  const msgs = { en: "Language: English", bm: "Bahasa Malaysia dipilih", zh: "语言已切换为中文" };
  showToast(msgs[lang], "info");
}

// forgot password and create account (demo only, nothing is sent)
function submitForgotPwd() {
  const email = document.getElementById("fpEmail").value.trim();
  if (!email) {
    showToast("Masukkan email terlebih dahulu", "info");
    return;
  }
  closeModal("modalForgotPwd");
  showToast("Link reset password dihantar ke " + email, "success");
}
function submitCreateAcc() {
  const name = document.getElementById("ca-name").value.trim();
  const email = document.getElementById("ca-email").value.trim();
  const pwd = document.getElementById("ca-pwd").value;
  const role = document.getElementById("ca-role").value;
  if (!name || !email || !pwd) {
    showToast("Sila lengkapkan semua maklumat", "info");
    return;
  }
  const accounts = dbGet("lxx_accounts") || [];
  if (accounts.some((a) => a.email === email)) {
    showToast("Email ini sudah didaftarkan", "info");
    return;
  }
  // only name, email and role are kept, never the password
  accounts.push({ name, email, role, created: new Date().toISOString() });
  dbSet("lxx_accounts", accounts);
  closeModal("modalCreateAcc");
  showToast("Akaun " + name + " berjaya didaftarkan!", "success");
}

dbInit();
employees = getEmployees();
