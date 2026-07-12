const sectionButtons = document.querySelectorAll(".section-button");
const appSections = document.querySelectorAll(".app-section");

const diaryForm = document.querySelector("#diaryForm");
const diaryInput = document.querySelector("#diaryInput");
const diaryList = document.querySelector("#diaryList");
const documentInput = document.querySelector("#documentInput");
const fileDropZone = document.querySelector("#fileDropZone");
const documentList = document.querySelector("#documentList");
const documentStatus = document.querySelector("#documentStatus");
const folderBoard = document.querySelector("#folderBoard");

const complaintsForm = document.querySelector("#complaintsForm");
const complaintsInput = document.querySelector("#complaintsInput");
const complaintsList = document.querySelector("#complaintsList");

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const foundationForm = document.querySelector("#foundationForm");
const foundationInput = document.querySelector("#foundationInput");
const foundationList = document.querySelector("#foundationList");
const foundationEditModeButton = document.querySelector("#foundationEditModeButton");
const foundationDeleteModeButton = document.querySelector("#foundationDeleteModeButton");

const observationForm = document.querySelector("#observationForm");
const observationDate = document.querySelector("#observationDate");
const observationDateDisplay = document.querySelector("#observationDateDisplay");
const datePickerPanel = document.querySelector("#datePickerPanel");
const observationHistory = document.querySelector("#observationHistory");
const clearObservationButton = document.querySelector("#clearObservationButton");
const goToCalendarButton = document.querySelector("#goToCalendarButton");
const chooseBackupFolderButton = document.querySelector("#chooseBackupFolderButton");
const importBackupButton = document.querySelector("#importBackupButton");
const backupFileInput = document.querySelector("#backupFileInput");
const calendarMonth = document.querySelector("#calendarMonth");
const calendarGrid = document.querySelector("#calendarGrid");
const previousMonthButton = document.querySelector("#previousMonthButton");
const nextMonthButton = document.querySelector("#nextMonthButton");
const confirmModal = document.querySelector("#confirmModal");
const confirmModalTitle = document.querySelector("#confirmModalTitle");
const confirmModalMessage = document.querySelector("#confirmModalMessage");
const confirmModalCancel = document.querySelector("#confirmModalCancel");
const confirmModalConfirm = document.querySelector("#confirmModalConfirm");

const observationInputs = {
  dopamine: document.querySelector("#dopamineInput"),
  energy: document.querySelector("#energyInput"),
  thinking: document.querySelector("#thinkingInput"),
  attention: document.querySelector("#attentionInput"),
  sustainedAttention: document.querySelector("#sustainedAttentionInput"),
  microbiota: document.querySelector("#microbiotaInput"),
  motivation: document.querySelector("#motivationInput"),
  humour: document.querySelector("#humourInput"),
  heaviness: document.querySelector("#heavinessInput"),
  mat: document.querySelector("#matInput")
};

const fruitInputs = document.querySelectorAll('input[name="fruit"]');
const foodSlotInputs = document.querySelectorAll('input[name="foodSlot"]');
const fastingInput = document.querySelector("#fastingInput");
const snowInput = document.querySelector("#snowInput");
const scoreOptionGroups = document.querySelectorAll(".score-options");
const scorePopup = document.createElement("div");

let activeScoreKey = "";

const foodSlotKeys = ["morning", "day", "evening"];
const foodSlotLabels = {
  morning: "M",
  day: "D",
  evening: "E"
};
const activityKeys = ["jogging", "meditation", "workout", "job", "flight", "turation", "book", "laptop", "art", "singing"];
const negativeQuestionKeys = ["heaviness", "mat"];
const limitedScoreOptions = {
  sustainedAttention: ["1", "5", "10"]
};

const observationQuestions = {
  dopamine: "DOPAMINE level?",
  energy: "Energy Level?",
  thinking: "Reasoning speed?",
  attention: "Concentration?",
  sustainedAttention: "Sustained attention?",
  microbiota: "Microbiota control?",
  motivation: "Motivation?",
  humour: "Humour level?",
  heaviness: "Body heaviness?",
  mat: "Mad?"
};

const fruitLabels = {
  banana: {
    text: "🍌"
  },
  apple: {
    text: "🍎"
  },
  watermelon: {
    text: "🍉"
  },
  melon: {
    text: "🍈"
  },
  avocado: {
    text: "🥑"
  },
  "dead-food": {
    text: "☠️"
  },
  deadfood: {
    text: "☠️"
  },
  juice: {
    image: "assets/fruits/juice.png?v=4",
    label: "Juice"
  },
  water: {
    image: "assets/fruits/water.png?v=1",
    label: "Water"
  },
  jogging: {
    text: "🏃"
  },
  meditation: {
    text: "🧘"
  },
  workout: {
    text: "🏋️"
  },
  job: {
    text: "🧑‍🔧"
  },
  flight: {
    text: "✈️"
  },
  turation: {
    text: "💦"
  },
  book: {
    text: "📚"
  },
  laptop: {
    text: "💻"
  },
  art: {
    text: "🎵"
  },
  singing: {
    text: "🎵"
  },
  cherry: {
    text: "🍒"
  },
  blueberry: {
    text: "🫐"
  },
  grapefruit: {
  image: "assets/fruits/grapefruit.png?v=2",
  label: "Grapefruit"
},

  orange: {
    text: "🍊"
  },
  grapes: {
    text: "🍇"
  },
  carrot: {
    text: "🥕"
  },
  jackfruit: {
    image: "assets/fruits/jackfruit.png?v=2",
    label: "Jackfruit"
  },
  papaya: {
    image: "assets/fruits/papaya.png?v=2",
    label: "Papaya"
  },
  pineapple: {
    text: "🍍"
  },
  muran: {
    image: "assets/fruits/muran.png?v=2",
    label: "Muran"
  },
  rambutan: {
    image: "assets/fruits/rambutan.png?v=2",
    label: "Rambutan"
  },
  durian: {
    image: "assets/fruits/durian.png?v=2",
    label: "Durian"
  },
  mangosteen: {
    image: "assets/fruits/mangosteen.png?v=2",
    label: "Mangosteen"
  }
};

const emptySavedData = {
  diary: [],
  complaints: [],
  tasks: [],
  foundations: [],
  documents: [],
  observations: {}
};

function readSavedData() {
  const rawData = localStorage.getItem("personalDashboard");

  if (!rawData) {
    return { ...emptySavedData };
  }

  localStorage.setItem("personalDashboardBackup", rawData);

  try {
    const parsedData = JSON.parse(rawData);
    return parsedData && typeof parsedData === "object"
      ? parsedData
      : { ...emptySavedData };
  } catch (error) {
    return { ...emptySavedData };
  }
}

const savedData = readSavedData();

if (!savedData.observations) {
  savedData.observations = {};
}

if (typeof savedData.observations !== "object" || Array.isArray(savedData.observations)) {
  savedData.observations = {};
}

if (!savedData.documents) {
  savedData.documents = [];
}

if (!savedData.foundations) {
  savedData.foundations = [];
}

let visibleCalendarDate = new Date();
let visibleDatePickerDate = new Date();
let backupDirectoryHandle = null;
let backupWriteTimer = 0;
let activeDraftDate = "";
let activeDraftSlot = "";
let pendingHistoryScrollDate = "";
let foundationMode = "view";
let activeFoundationDrag = null;
const observationDrafts = {};

const foundationPalette = [
  { name: "white", background: "rgba(255, 255, 255, 0.94)", border: "#dbe3ef" },
  { name: "blue", background: "#eff6ff", border: "#93c5fd" },
  { name: "yellow", background: "#fefce8", border: "#fde68a" },
  { name: "green", background: "#f0fdf4", border: "#86efac" },
  { name: "pink", background: "#fdf2f8", border: "#f9a8d4" },
  { name: "violet", background: "#f5f3ff", border: "#c4b5fd" },
  { name: "gray", background: "#f8fafc", border: "#cbd5e1" }
];
const backupDatabaseName = "selfObservationBackup";
const backupDatabaseStore = "handles";
const backupDirectoryKey = "directory";

function saveData() {
  localStorage.setItem("personalDashboard", JSON.stringify(savedData));
  scheduleAutomaticBackup();
}

function openBackupDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(backupDatabaseName, 1);

    request.addEventListener("upgradeneeded", () => {
      request.result.createObjectStore(backupDatabaseStore);
    });

    request.addEventListener("success", () => resolve(request.result));
    request.addEventListener("error", () => reject(request.error));
  });
}

async function getStoredBackupDirectory() {
  const database = await openBackupDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(backupDatabaseStore, "readonly");
    const store = transaction.objectStore(backupDatabaseStore);
    const request = store.get(backupDirectoryKey);

    request.addEventListener("success", () => resolve(request.result || null));
    request.addEventListener("error", () => reject(request.error));
  });
}

async function setStoredBackupDirectory(handle) {
  const database = await openBackupDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(backupDatabaseStore, "readwrite");
    const store = transaction.objectStore(backupDatabaseStore);
    const request = store.put(handle, backupDirectoryKey);

    request.addEventListener("success", () => resolve());
    request.addEventListener("error", () => reject(request.error));
  });
}

async function hasBackupWritePermission(handle) {
  if (!handle || typeof handle.queryPermission !== "function") {
    return false;
  }

  const permission = await handle.queryPermission({ mode: "readwrite" });
  return permission === "granted";
}

async function requestBackupWritePermission(handle) {
  if (!handle || typeof handle.requestPermission !== "function") {
    return false;
  }

  const permission = await handle.requestPermission({ mode: "readwrite" });
  return permission === "granted";
}

function getBackupPayload() {
  return JSON.stringify({
    exportedAt: new Date().toISOString(),
    app: "Self-Observation",
    data: normalizeSavedData(savedData)
  }, null, 2);
}

async function writeBackupFile(fileName, contents) {
  const fileHandle = await backupDirectoryHandle.getFileHandle(fileName, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(contents);
  await writable.close();
}

async function writeAutomaticBackup() {
  if (!backupDirectoryHandle) {
    return;
  }

  const hasPermission = await hasBackupWritePermission(backupDirectoryHandle);

  if (!hasPermission) {
    chooseBackupFolderButton.textContent = "Choose folder";
    chooseBackupFolderButton.classList.remove("connected");
    return;
  }

  const contents = getBackupPayload();
  await writeBackupFile("self-observation-backup-latest.json", contents);
  await writeBackupFile(`self-observation-backup-${getTodayDate()}.json`, contents);
  chooseBackupFolderButton.textContent = "Backup folder ✓";
  chooseBackupFolderButton.classList.add("connected");
}

function scheduleAutomaticBackup() {
  window.clearTimeout(backupWriteTimer);
  backupWriteTimer = window.setTimeout(() => {
    writeAutomaticBackup().catch(() => {
      chooseBackupFolderButton.textContent = "Choose folder";
      chooseBackupFolderButton.classList.remove("connected");
    });
  }, 400);
}

async function initializeBackupFolder() {
  if (!("showDirectoryPicker" in window)) {
    chooseBackupFolderButton.textContent = "Choose folder";
    chooseBackupFolderButton.title = "Open with Chrome on localhost to enable automatic folder backup.";
    return;
  }

  try {
    backupDirectoryHandle = await getStoredBackupDirectory();

    if (!backupDirectoryHandle) {
      chooseBackupFolderButton.textContent = "Choose folder";
      return;
    }

    if (await hasBackupWritePermission(backupDirectoryHandle)) {
      chooseBackupFolderButton.textContent = "Backup folder ✓";
      chooseBackupFolderButton.classList.add("connected");
      await writeAutomaticBackup();
      return;
    }

    chooseBackupFolderButton.textContent = "Choose folder";
    chooseBackupFolderButton.classList.remove("connected");
  } catch (error) {
    chooseBackupFolderButton.textContent = "Choose folder";
    chooseBackupFolderButton.classList.remove("connected");
  }
}

function normalizeSavedData(data) {
  const normalizedData = data && typeof data === "object" && !Array.isArray(data)
    ? data
    : {};

  return {
    diary: Array.isArray(normalizedData.diary) ? normalizedData.diary : [],
    complaints: Array.isArray(normalizedData.complaints) ? normalizedData.complaints : [],
    tasks: Array.isArray(normalizedData.tasks) ? normalizedData.tasks : [],
    foundations: Array.isArray(normalizedData.foundations) ? normalizedData.foundations : [],
    documents: Array.isArray(normalizedData.documents) ? normalizedData.documents : [],
    observations: normalizedData.observations
      && typeof normalizedData.observations === "object"
      && !Array.isArray(normalizedData.observations)
        ? normalizedData.observations
        : {}
  };
}

function replaceSavedData(nextData) {
  Object.keys(savedData).forEach((key) => {
    delete savedData[key];
  });

  Object.assign(savedData, normalizeSavedData(nextData));
}

function refreshAppViews() {
  renderEntries(savedData.diary, diaryList, "diary");
  renderEntries(savedData.complaints, complaintsList, "complaints");
  renderDocuments();
  renderBasicFolder();
  renderTasks();
  renderFoundations();
  loadObservation(getObservationDateValue());
  renderObservationHistory();
  renderCalendar();
}

function importBackup(file) {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    try {
      const parsedBackup = JSON.parse(String(reader.result || "{}"));
      const nextData = parsedBackup && parsedBackup.data ? parsedBackup.data : parsedBackup;
      const currentData = localStorage.getItem("personalDashboard");

      if (currentData) {
        localStorage.setItem("personalDashboardBackup", currentData);
      }

      replaceSavedData(nextData);
      saveData();
      refreshAppViews();
      alert("Backup imported.");
    } catch (error) {
      alert("Could not import this backup file.");
    }
  });

  reader.readAsText(file);
}

function showSection(sectionId) {
  sectionButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.section === sectionId);
  });

  appSections.forEach((section) => {
    section.classList.toggle("active", section.id === sectionId);
  });

  if (sectionId === "observation") {
    const scrollDate = pendingHistoryScrollDate || getObservationDateValue();

    requestAnimationFrame(() => {
      highlightHistoryDate(scrollDate, true, "auto");
    });

    setTimeout(() => {
      highlightHistoryDate(scrollDate, true, "auto");
    }, 120);

    setTimeout(() => {
      highlightHistoryDate(scrollDate, true, "auto");
      pendingHistoryScrollDate = "";
    }, 260);
  }
}

function askForConfirmation({
  title = "Confirm action",
  message = "Are you sure?",
  confirmText = "Delete",
  danger = true
} = {}) {
  if (!confirmModal) {
    return Promise.resolve(false);
  }

  confirmModalTitle.textContent = title;
  confirmModalMessage.textContent = message;
  confirmModalConfirm.textContent = confirmText;
  confirmModalConfirm.classList.toggle("danger", danger);
  confirmModal.hidden = false;
  confirmModalConfirm.focus();

  return new Promise((resolve) => {
    const close = (result) => {
      confirmModal.hidden = true;
      confirmModalCancel.removeEventListener("click", onCancel);
      confirmModalConfirm.removeEventListener("click", onConfirm);
      confirmModal.removeEventListener("click", onBackdrop);
      document.removeEventListener("keydown", onKeydown);
      resolve(result);
    };

    const onCancel = () => close(false);
    const onConfirm = () => close(true);
    const onBackdrop = (event) => {
      if (event.target === confirmModal) {
        close(false);
      }
    };
    const onKeydown = (event) => {
      if (event.key === "Escape") {
        close(false);
      }
    };

    confirmModalCancel.addEventListener("click", onCancel);
    confirmModalConfirm.addEventListener("click", onConfirm);
    confirmModal.addEventListener("click", onBackdrop);
    document.addEventListener("keydown", onKeydown);
  });
}

function createEntryCard(entry, index, type, listElement) {
  const card = document.createElement("article");
  card.className = "entry-card";

  const date = document.createElement("p");
  date.className = "entry-date";
  date.textContent = entry.date;

  const text = document.createElement("p");
  text.textContent = entry.text;

  const actions = document.createElement("div");
  actions.className = "entry-actions";

  const editButton = document.createElement("button");
  editButton.className = "entry-action-button";
  editButton.type = "button";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.className = "entry-action-button entry-delete-button";
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";

  editButton.addEventListener("click", () => {
    const editor = document.createElement("textarea");
    const editorActions = document.createElement("div");
    const saveButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    editor.className = "entry-editor";
    editor.rows = 4;
    editor.value = entry.text;

    editorActions.className = "entry-actions";
    saveButton.className = "entry-action-button";
    saveButton.type = "button";
    saveButton.textContent = "Save";

    cancelButton.className = "entry-action-button";
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";

    saveButton.addEventListener("click", () => {
      const trimmedText = editor.value.trim();

      if (trimmedText === "") {
        return;
      }

      savedData[type][index].text = trimmedText;
      saveData();
      renderEntries(savedData[type], listElement, type);
    });

    cancelButton.addEventListener("click", () => {
      renderEntries(savedData[type], listElement, type);
    });

    editorActions.append(saveButton, cancelButton);
    card.replaceChildren(date, editor, editorActions);
    editor.focus();
  });

  deleteButton.addEventListener("click", async () => {
    const shouldDelete = await askForConfirmation({
      title: "Delete entry?",
      message: "This note will be removed from the list.",
      confirmText: "Delete"
    });

    if (!shouldDelete) {
      return;
    }

    savedData[type].splice(index, 1);
    saveData();
    renderEntries(savedData[type], listElement, type);
  });

  actions.append(editButton, deleteButton);
  card.append(date, text, actions);
  return card;
}

function renderEntries(entries, listElement, type) {
  listElement.innerHTML = "";

  entries.forEach((entry, index) => {
    listElement.prepend(createEntryCard(entry, index, type, listElement));
  });
}

function addEntry(type, inputElement, listElement) {
  const text = inputElement.value.trim();

  if (text === "") {
    return;
  }

  savedData[type].push({
    text,
    date: new Date().toLocaleString()
  });

  inputElement.value = "";
  saveData();
  renderEntries(savedData[type], listElement, type);
}

function isReadableTextFile(file) {
  const readableExtensions = [".txt", ".md", ".csv", ".json", ".html", ".htm"];
  const fileName = file.name.toLowerCase();

  return file.type.startsWith("text/") || readableExtensions.some((extension) => fileName.endsWith(extension));
}

function isPdfFile(file) {
  return file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
}

function isImageFile(file) {
  return file.type.startsWith("image/") || /\.(jpe?g|png|webp)$/i.test(file.name);
}

function readFileText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsText(file);
  });
}

function setDocumentStatus(message, type = "") {
  documentStatus.textContent = message;
  documentStatus.className = `document-status ${type}`.trim();
}

function looksLikeCorruptedText(text) {
  const compactText = text.replace(/\s/g, "");

  if (compactText.length < 80) {
    return false;
  }

  const suspiciousCharacters = compactText.match(/[À-ÿ�]/g) || [];
  const readableCharacters = compactText.match(/[A-Za-zА-Яа-яЁёІіЇїЄєҐґ0-9]/g) || [];

  return suspiciousCharacters.length / compactText.length > 0.18
    && readableCharacters.length / compactText.length < 0.72;
}

async function recognizeImageWithOcr(imageSource, statusPrefix) {
  if (!window.Tesseract) {
    throw new Error("OCR reader is not loaded.");
  }

  const result = await window.Tesseract.recognize(imageSource, "eng+rus+ukr", {
    logger: (progress) => {
      if (progress.status) {
        const percent = progress.progress ? ` ${Math.round(progress.progress * 100)}%` : "";
        setDocumentStatus(`${statusPrefix}: ${progress.status}${percent}`);
      }
    }
  });

  return result.data.text || "";
}

async function readPdfWithOcr(pdf, fileName) {
  const pages = [];

  if (!window.Tesseract) {
    throw new Error("PDF text looks corrupted and OCR reader is not loaded.");
  }

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    setDocumentStatus(`Running OCR for PDF page ${pageNumber} of ${pdf.numPages}: ${fileName}`);
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1.7 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
      canvasContext: context,
      viewport
    }).promise;

    const pageText = await recognizeImageWithOcr(
      canvas.toDataURL("image/png"),
      `OCR PDF page ${pageNumber} of ${pdf.numPages}`
    );

    canvas.width = 0;
    canvas.height = 0;

    if (pageText.trim()) {
      pages.push(pageText.trim());
    }
  }

  return pages.join("\n");
}

async function readPdfText(file) {
  if (!window.pdfjsLib) {
    throw new Error("PDF reader is not loaded.");
  }

  window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

  const pdfBuffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: pdfBuffer }).promise;
  const pages = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    setDocumentStatus(`Reading PDF page ${pageNumber} of ${pdf.numPages}: ${file.name}`);
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const pageText = content.items
      .map((item) => item.str)
      .join(" ")
      .trim();

    if (pageText) {
      pages.push(pageText);
    }
  }

  const extractedText = pages.join("\n");

  if (extractedText.trim() === "" || looksLikeCorruptedText(extractedText)) {
    setDocumentStatus(`PDF text looks corrupted. Running OCR: ${file.name}`, "warning");
    return readPdfWithOcr(pdf, file.name);
  }

  return extractedText;
}

async function readImageText(file) {
  return recognizeImageWithOcr(file, `OCR image ${file.name}`);
}

function uniqueItems(items) {
  return [...new Set(items.map((item) => item.trim()).filter(Boolean))];
}

function extractMainDocumentText(text) {
  return text
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function getDocumentCategory(line) {
  const lowerLine = line.toLowerCase();

  if (/https?:\/\/|www\./i.test(line)) {
    return "links";
  }

  if (line.endsWith("?")) {
    return "questions";
  }

  if (/^(\-|\*|\d+\.)?\s*(todo|task|do|need|must|fix|check|review|call|buy|зробити|сделать|надо|нужно|проверить)\b/i.test(line)) {
    return "tasks";
  }

  if (lowerLine.includes("idea") || lowerLine.includes("можно") || lowerLine.includes("идея") || lowerLine.includes("ідея")) {
    return "ideas";
  }

  return "notes";
}

function structureDocumentText(text) {
  const cleanedText = text
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .trim();
  const lines = cleanedText
    .split("\n")
    .map((line) => line.trim().replace(/^[-*•]\s*/, ""))
    .filter(Boolean);
  const structure = {
    links: [],
    tasks: [],
    questions: [],
    ideas: [],
    notes: []
  };

  lines.forEach((line) => {
    structure[getDocumentCategory(line)].push(line);
  });

  Object.keys(structure).forEach((key) => {
    structure[key] = uniqueItems(structure[key]).slice(0, 30);
  });

  return structure;
}

function getDocumentEditableText(documentItem) {
  if (documentItem.text) {
    return documentItem.text;
  }

  if (!documentItem.structure) {
    return "";
  }

  return Object.values(documentItem.structure)
    .flat()
    .join("\n");
}

function renderDocumentCategories(card, documentItem) {
  card.querySelectorAll(".document-category").forEach((section) => section.remove());

  Object.entries(documentItem.structure).forEach(([category, items]) => {
    if (items.length === 0) {
      return;
    }

    const section = document.createElement("section");
    const heading = document.createElement("h5");
    const list = document.createElement("ul");

    section.className = "document-category";
    heading.textContent = category[0].toUpperCase() + category.slice(1);

    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.append(listItem);
    });

    section.append(heading, list);
    card.append(section);
  });
}

function createDocumentCard(documentItem, index) {
  const card = document.createElement("article");
  const header = document.createElement("div");
  const title = document.createElement("h4");
  const meta = document.createElement("p");
  const actions = document.createElement("div");
  const deleteButton = document.createElement("button");

  card.className = "document-card";
  header.className = "document-card-header";
  actions.className = "document-card-actions";
  title.textContent = documentItem.name;
  meta.textContent = documentItem.date;
  deleteButton.className = "entry-action-button entry-delete-button";
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", async () => {
    const shouldDelete = await askForConfirmation({
      title: "Delete document?",
      message: "This document structure will be removed.",
      confirmText: "Delete"
    });

    if (!shouldDelete) {
      return;
    }

    savedData.documents.splice(index, 1);
    saveData();
    renderDocuments();
  });

  actions.append(deleteButton);
  header.append(title, meta, actions);
  card.append(header);

  if (documentItem.unsupported) {
    const warning = document.createElement("p");
    warning.className = "document-warning";
    warning.textContent = documentItem.message || "This file was accepted, but its text cannot be read yet in this browser version.";
    card.append(warning);
    return card;
  }

  const editor = document.createElement("textarea");
  let autoSaveTimer = null;

  editor.className = "document-text-editor document-inline-editor";
  editor.value = getDocumentEditableText(documentItem);
  editor.rows = 6;
  card.append(editor);

  editor.addEventListener("input", () => {
    clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
      const editedText = editor.value.trim();

      savedData.documents[index].text = editedText;
      savedData.documents[index].structure = structureDocumentText(editedText);
      saveData();
      renderBasicFolder();
    }, 500);
  });

  return card;
}

function renderDocuments() {
  documentList.innerHTML = "";

  savedData.documents.forEach((documentItem, index) => {
    documentList.prepend(createDocumentCard(documentItem, index));
  });

  renderBasicFolder();
}

function createFolderFileCard(documentItem, category) {
  const card = document.createElement("article");
  const title = document.createElement("h4");
  const meta = document.createElement("p");

  card.className = "folder-file-card";
  title.textContent = documentItem.name;
  meta.textContent = documentItem.date;
  card.append(title, meta);

  if (category === "unreadable") {
    const warning = document.createElement("p");
    warning.textContent = documentItem.message || "No readable text.";
    card.append(warning);
    return card;
  }

  const items = documentItem.structure?.[category] || [];
  const list = document.createElement("ul");

  items.slice(0, 5).forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.append(listItem);
  });

  if (items.length > 5) {
    const moreItem = document.createElement("li");
    moreItem.textContent = `+${items.length - 5} more`;
    list.append(moreItem);
  }

  card.append(list);
  return card;
}

function renderBasicFolder() {
  const folderCategories = [
    ["links", "Links"],
    ["tasks", "Tasks"],
    ["questions", "Questions"],
    ["ideas", "Ideas"],
    ["notes", "Notes"],
    ["unreadable", "Unreadable"]
  ];

  folderBoard.innerHTML = "";

  folderCategories.forEach(([category, label]) => {
    const column = document.createElement("section");
    const title = document.createElement("h3");
    const files = savedData.documents.filter((documentItem) => {
      if (category === "unreadable") {
        return documentItem.unsupported;
      }

      return !documentItem.unsupported && documentItem.structure?.[category]?.length > 0;
    });

    column.className = "folder-column";
    title.textContent = `${label} (${files.length})`;
    column.append(title);

    if (files.length === 0) {
      const empty = document.createElement("p");
      empty.className = "folder-empty";
      empty.textContent = "Empty";
      column.append(empty);
    }

    files.forEach((documentItem) => {
      column.append(createFolderFileCard(documentItem, category));
    });

    folderBoard.append(column);
  });
}

async function organizeFiles(files) {
  if (files.length === 0) {
    return;
  }

  if (window.location.protocol === "file:") {
    setDocumentStatus("PDF and OCR work better from http://localhost:8000, not from a file:// page.", "warning");
  } else {
    setDocumentStatus(`Reading ${files.length} file(s)...`);
  }

  for (const file of files) {
    try {
      let text = "";

      if (isReadableTextFile(file)) {
        setDocumentStatus(`Reading text file: ${file.name}`);
        text = await readFileText(file);
      } else if (isPdfFile(file)) {
        setDocumentStatus(`Reading PDF: ${file.name}`);
        text = await readPdfText(file);
      } else if (isImageFile(file)) {
        setDocumentStatus(`Running OCR for image: ${file.name}`);
        text = await readImageText(file);
      } else {
        savedData.documents.push({
          name: file.name,
          date: new Date().toLocaleString(),
          unsupported: true,
          message: "This file type is accepted for storage, but it is not readable by the organizer yet."
        });
        continue;
      }

      if (text.trim() === "") {
        savedData.documents.push({
          name: file.name,
          date: new Date().toLocaleString(),
          unsupported: true,
          message: "No readable text was found in this file."
        });
        continue;
      }

      const mainText = extractMainDocumentText(text);

      savedData.documents.push({
        name: file.name,
        date: new Date().toLocaleString(),
        text: mainText,
        structure: structureDocumentText(mainText)
      });
    } catch (error) {
      savedData.documents.push({
        name: file.name,
        date: new Date().toLocaleString(),
        unsupported: true,
        message: "The file could not be read. Check internet access for PDF/OCR libraries, or try a clearer file."
      });
    }
  }

  saveData();
  renderDocuments();
  setDocumentStatus("Done.", "success");
}

function renderTasks() {
  taskList.innerHTML = "";

  savedData.tasks.forEach((task, index) => {
    const item = document.createElement("li");
    item.className = "task-item";
    item.classList.toggle("done", task.done);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    const text = document.createElement("p");
    text.textContent = task.text;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editButton = document.createElement("button");
    editButton.className = "task-action-button";
    editButton.type = "button";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.className = "task-action-button delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";

    checkbox.addEventListener("change", () => {
      savedData.tasks[index].done = checkbox.checked;
      saveData();
      renderTasks();
    });

    editButton.addEventListener("click", () => {
      const editor = document.createElement("input");
      const saveButton = document.createElement("button");
      const cancelButton = document.createElement("button");
      const editorActions = document.createElement("div");

      editor.type = "text";
      editor.className = "task-editor";
      editor.value = task.text;

      saveButton.className = "task-action-button save-task-button";
      saveButton.type = "button";
      saveButton.textContent = "Save";

      cancelButton.className = "task-action-button";
      cancelButton.type = "button";
      cancelButton.textContent = "Cancel";

      editorActions.className = "task-actions";
      editorActions.append(saveButton, cancelButton);

      saveButton.addEventListener("click", () => {
        const nextText = editor.value.trim();

        if (nextText === "") {
          return;
        }

        savedData.tasks[index].text = nextText;
        saveData();
        renderTasks();
      });

      cancelButton.addEventListener("click", () => {
        renderTasks();
      });

      editor.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          saveButton.click();
        }

        if (event.key === "Escape") {
          renderTasks();
        }
      });

      item.replaceChildren(checkbox, editor, editorActions);
      editor.focus();
      editor.select();
    });

    deleteButton.addEventListener("click", async () => {
      const shouldDelete = await askForConfirmation({
        title: "Delete task?",
        message: task.text,
        confirmText: "Delete"
      });

      if (!shouldDelete) {
        return;
      }

      savedData.tasks.splice(index, 1);
      saveData();
      renderTasks();
    });

    actions.append(editButton, deleteButton);
    item.append(checkbox, text, actions);
    taskList.append(item);
  });
}

function getFoundationPaletteItem(colorName) {
  return foundationPalette.find((item) => item.name === colorName) || foundationPalette[0];
}

function normalizeFoundation(foundation) {
  const safeFoundation = foundation && typeof foundation === "object"
    ? foundation
    : { text: String(foundation || "") };
  const color = getFoundationPaletteItem(safeFoundation.color).name;
  const normalizedFoundation = {
    ...safeFoundation,
    text: String(safeFoundation.text || ""),
    color
  };

  delete normalizedFoundation.x;
  delete normalizedFoundation.y;
  delete normalizedFoundation.manual;

  return normalizedFoundation;
}

function applyFoundationCardStyle(card, foundation) {
  const color = getFoundationPaletteItem(foundation.color);
  card.style.background = color.background;
  card.style.borderColor = color.border;
}

function startFoundationDrag(event, card, index) {
  if (event.target.closest("textarea, button, input")) {
    return;
  }

  activeFoundationDrag = {
    index,
    card,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    targetIndex: -1,
    didMove: false
  };

  card.classList.add("dragging");
  card.setPointerCapture(event.pointerId);
  event.preventDefault();
}

function moveFoundationDrag(event) {
  if (!activeFoundationDrag || event.pointerId !== activeFoundationDrag.pointerId) {
    return;
  }

  const deltaX = event.clientX - activeFoundationDrag.startX;
  const deltaY = event.clientY - activeFoundationDrag.startY;
  activeFoundationDrag.card.style.transform = `translate(${Math.round(deltaX)}px, ${Math.round(deltaY)}px)`;
  activeFoundationDrag.didMove = Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4;

  const target = getFoundationDropTarget(event.clientX, event.clientY, activeFoundationDrag.card)
    || getClosestFoundationDropTarget(event.clientX, event.clientY, activeFoundationDrag.card);
  foundationList.querySelectorAll(".foundation-card.drop-target").forEach((item) => {
    if (item !== target) {
      item.classList.remove("drop-target");
    }
  });

  if (target) {
    activeFoundationDrag.targetIndex = Number(target.dataset.index);
    target.classList.add("drop-target");
  }
}

function getFoundationDropTarget(clientX, clientY, draggedCard) {
  draggedCard.style.pointerEvents = "none";
  const target = document.elementFromPoint(clientX, clientY)?.closest(".foundation-card");
  draggedCard.style.pointerEvents = "";

  if (!target || target === draggedCard || !foundationList.contains(target)) {
    return null;
  }

  return target;
}

function getClosestFoundationDropTarget(clientX, clientY, draggedCard) {
  const boardRect = foundationList.getBoundingClientRect();

  if (
    clientX < boardRect.left
    || clientX > boardRect.right
    || clientY < boardRect.top
    || clientY > boardRect.bottom
  ) {
    return null;
  }

  return Array.from(foundationList.querySelectorAll(".foundation-card"))
    .filter((card) => card !== draggedCard)
    .map((card) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(clientX - centerX, clientY - centerY);
      return { card, distance };
    })
    .sort((a, b) => a.distance - b.distance)[0]?.card || null;
}

function moveFoundationItem(fromIndex, toIndex) {
  if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0) {
    return;
  }

  const [item] = savedData.foundations.splice(fromIndex, 1);
  savedData.foundations.splice(toIndex, 0, item);
}

function stopFoundationDrag(event) {
  if (!activeFoundationDrag || event.pointerId !== activeFoundationDrag.pointerId) {
    return;
  }

  const { card, index } = activeFoundationDrag;
  const target = getFoundationDropTarget(event.clientX, event.clientY, card)
    || getClosestFoundationDropTarget(event.clientX, event.clientY, card);
  const targetIndex = target ? Number(target.dataset.index) : -1;
  const savedTargetIndex = activeFoundationDrag.targetIndex;

  card.classList.remove("dragging");
  card.style.transform = "";
  foundationList.querySelectorAll(".foundation-card.drop-target").forEach((item) => item.classList.remove("drop-target"));

  const nextIndex = targetIndex >= 0 ? targetIndex : savedTargetIndex;

  if (activeFoundationDrag.didMove && nextIndex >= 0 && nextIndex !== index) {
    const movedItem = savedData.foundations[index];
    moveFoundationItem(index, nextIndex);
    movedItem.updated = new Date().toLocaleString();
    saveData();
    renderFoundations();
  }

  activeFoundationDrag = null;
}

function renderFoundations() {
  foundationList.innerHTML = "";
  foundationEditModeButton.classList.toggle("active", foundationMode === "edit");
  foundationDeleteModeButton.classList.toggle("active", foundationMode === "delete");

  let didNormalize = false;

  savedData.foundations.forEach((foundation, index) => {
    const foundationObject = foundation && typeof foundation === "object" ? foundation : {};
    const normalizedFoundation = normalizeFoundation(foundation);
    savedData.foundations[index] = normalizedFoundation;
    didNormalize = didNormalize
      || normalizedFoundation.text !== foundation?.text
      || normalizedFoundation.color !== foundation?.color
      || "x" in foundationObject
      || "y" in foundationObject
      || "manual" in foundationObject;

    const card = document.createElement("article");
    const content = document.createElement("p");

    card.className = "foundation-card";
    card.dataset.index = index;
    card.classList.toggle("is-editing", foundationMode === "edit");
    applyFoundationCardStyle(card, normalizedFoundation);
    content.textContent = normalizedFoundation.text;

    card.addEventListener("pointerdown", (event) => startFoundationDrag(event, card, index));
    card.addEventListener("pointermove", moveFoundationDrag);
    card.addEventListener("pointerup", stopFoundationDrag);
    card.addEventListener("pointercancel", stopFoundationDrag);

    if (foundationMode === "edit") {
      const editor = document.createElement("textarea");
      const colorRow = document.createElement("div");
      editor.className = "foundation-editor";
      colorRow.className = "foundation-color-row";
      editor.rows = 3;
      editor.value = normalizedFoundation.text;

      editor.addEventListener("change", () => {
        const nextText = editor.value.trim();

        if (nextText === "") {
          editor.value = normalizedFoundation.text;
          return;
        }

        savedData.foundations[index].text = nextText;
        savedData.foundations[index].updated = new Date().toLocaleString();
        saveData();
        renderFoundations();
      });

      foundationPalette.forEach((paletteItem) => {
        const colorButton = document.createElement("button");
        colorButton.className = "foundation-color-button";
        colorButton.type = "button";
        colorButton.title = paletteItem.name;
        colorButton.style.background = paletteItem.background;
        colorButton.style.borderColor = paletteItem.border;
        colorButton.classList.toggle("active", normalizedFoundation.color === paletteItem.name);

        colorButton.addEventListener("click", () => {
          savedData.foundations[index].color = paletteItem.name;
          savedData.foundations[index].updated = new Date().toLocaleString();
          saveData();
          renderFoundations();
        });

        colorRow.append(colorButton);
      });

      card.append(editor, colorRow);
    } else {
      card.append(content);
    }

    if (foundationMode === "delete") {
      const deleteButton = document.createElement("button");
      deleteButton.className = "foundation-delete-x";
      deleteButton.type = "button";
      deleteButton.textContent = "×";
      deleteButton.setAttribute("aria-label", "Delete foundation");

      deleteButton.addEventListener("click", async () => {
        const shouldDelete = await askForConfirmation({
          title: "Delete foundation?",
          message: normalizedFoundation.text,
          confirmText: "Delete"
        });

        if (!shouldDelete) {
          return;
        }

        savedData.foundations.splice(index, 1);
        saveData();
        renderFoundations();
      });

      card.append(deleteButton);
    }

    foundationList.append(card);
  });

  if (didNormalize) {
    saveData();
  }
}

function getTodayDate() {
  return formatDateKey(new Date());
}

function normalizeFruitName(fruit) {
  const normalizedFruit = String(fruit).trim().toLowerCase();

  if (normalizedFruit === "guitar") {
    return "art";
  }

  return normalizedFruit;
}

function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (value) {
    return [value];
  }

  return [];
}

function normalizeObservationValue(key, value) {
  if (value === "") {
    return "";
  }

  const score = Number(value);

  if (Number.isNaN(score)) {
    return value;
  }

  if (negativeQuestionKeys.includes(key) && score > 0) {
    return String(-score);
  }

  return String(score);
}

function getActiveFoodSlot() {
  const selectedSlot = document.querySelector('input[name="foodSlot"]:checked');
  return selectedSlot ? selectedSlot.value : "morning";
}

function getCurrentFoodSlot() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "morning";
  }

  if (hour < 18) {
    return "day";
  }

  return "evening";
}

function setActiveFoodSlot(slot) {
  const targetSlot = foodSlotKeys.includes(slot) ? slot : "morning";
  const targetInput = Array.from(foodSlotInputs).find((input) => input.value === targetSlot);

  if (targetInput) {
    targetInput.checked = true;
  }
}

function getObservationFoodSlots(observation) {
  const safeObservation = observation && typeof observation === "object" ? observation : {};
  const foodSlots = {
    morning: [],
    day: [],
    evening: []
  };

  if (safeObservation.foodSlots && typeof safeObservation.foodSlots === "object") {
    foodSlotKeys.forEach((slot) => {
      foodSlots[slot] = toArray(safeObservation.foodSlots[slot]).map(normalizeFruitName);
    });

    return foodSlots;
  }

  foodSlots.day = toArray(safeObservation.fruits).map(normalizeFruitName);
  return foodSlots;
}

function getObservationSnowSlots(observation) {
  const safeObservation = observation && typeof observation === "object" ? observation : {};
  const snowSlots = {
    morning: false,
    day: false,
    evening: false
  };

  if (safeObservation.snowSlots && typeof safeObservation.snowSlots === "object") {
    foodSlotKeys.forEach((slot) => {
      snowSlots[slot] = Boolean(safeObservation.snowSlots[slot]);
    });

    return snowSlots;
  }

  if (safeObservation.snow) {
    snowSlots.day = true;
  }

  return snowSlots;
}

function createEmptySlotObservation() {
  return Object.fromEntries(
    Object.keys(observationQuestions).map((key) => [key, ""])
  );
}

function getObservationSlots(observation) {
  const safeObservation = observation && typeof observation === "object" ? observation : {};
  const slots = {
    morning: createEmptySlotObservation(),
    day: createEmptySlotObservation(),
    evening: createEmptySlotObservation()
  };

  if (safeObservation.slots && typeof safeObservation.slots === "object") {
    foodSlotKeys.forEach((slot) => {
      Object.keys(observationQuestions).forEach((key) => {
        const slotValues = safeObservation.slots[slot];
        const value = slotValues && typeof slotValues === "object" ? slotValues[key] : "";
        slots[slot][key] = normalizeObservationValue(key, value || "");
      });
    });

    return slots;
  }

  Object.keys(observationQuestions).forEach((key) => {
    slots.day[key] = normalizeObservationValue(key, safeObservation[key] || "");
  });

  return slots;
}

function createObservationDraft(date) {
  const observation = savedData.observations[date] || {};

  return {
    slots: getObservationSlots(observation),
    foodSlots: getObservationFoodSlots(observation),
    snowSlots: getObservationSnowSlots(observation),
    fasting: Boolean(observation.fasting)
  };
}

function getObservationDraft(date) {
  if (!observationDrafts[date]) {
    observationDrafts[date] = createObservationDraft(date);
  }

  return observationDrafts[date];
}

function persistCurrentObservationDraft() {
  if (!activeDraftDate || !activeDraftSlot) {
    return;
  }

  const draft = getObservationDraft(activeDraftDate);
  draft.slots[activeDraftSlot] = getSelectedObservationAnswers();
  draft.foodSlots[activeDraftSlot] = getSelectedFruits();
  draft.snowSlots[activeDraftSlot] = snowInput.checked;
  draft.fasting = fastingInput.checked;
}

function createSavedObservationFromDraft(draft) {
  return {
    ...draft.slots.day,
    slots: draft.slots,
    foodSlots: draft.foodSlots,
    fruits: [
      ...draft.foodSlots.morning,
      ...draft.foodSlots.day,
      ...draft.foodSlots.evening
    ],
    fasting: draft.fasting,
    snow: Object.values(draft.snowSlots).some(Boolean),
    snowSlots: draft.snowSlots
  };
}

function getSelectedObservationAnswers() {
  return Object.fromEntries(
    Object.entries(observationInputs).map(([key, input]) => [key, input.value.trim()])
  );
}

function getSelectedFruits() {
  return Array.from(fruitInputs)
    .filter((input) => input.checked)
    .map((input) => input.value);
}

function loadFoodSlot(date) {
  const draft = getObservationDraft(date);
  const activeSlot = getActiveFoodSlot();
  const fruits = draft.foodSlots[activeSlot] || [];

  fruitInputs.forEach((input) => {
    input.checked = fruits.includes(input.value);
  });
}

function loadObservation(date) {
  const draft = getObservationDraft(date);
  const activeSlot = getActiveFoodSlot();

  Object.keys(observationInputs).forEach((key) => {
    observationInputs[key].value = draft.slots[activeSlot][key] || "";
  });

  updateScoreButtons();
  loadFoodSlot(date);

  fastingInput.checked = Boolean(draft.fasting);
  snowInput.checked = Boolean(draft.snowSlots[activeSlot]);
  activeDraftDate = date;
  activeDraftSlot = activeSlot;
}

function updateScoreButtons() {
  scoreOptionGroups.forEach((group) => {
    const key = group.dataset.scoreFor;
    const currentValue = observationInputs[key].value;
    const currentButton = group.querySelector(".score-current");

    if (currentButton) {
      currentButton.textContent = currentValue || "-";
    }
  });

  updateScorePopup();
}

function updateScorePopup() {
  const currentValue = activeScoreKey ? observationInputs[activeScoreKey].value : "";
  const isNegativeQuestion = negativeQuestionKeys.includes(activeScoreKey);
  const limitedScores = limitedScoreOptions[activeScoreKey];

  scorePopup.querySelectorAll(".score-button").forEach((button) => {
    const buttonValue = Number(button.dataset.value);
    const scoreClass = getQuestionScoreClass(activeScoreKey, button.dataset.value);

    button.hidden = limitedScores
      ? !limitedScores.includes(button.dataset.value)
      : isNegativeQuestion
        ? buttonValue > 0
        : buttonValue < 0;
    button.classList.remove("score-low", "score-warning", "score-medium", "score-high");
    if (scoreClass) {
      button.classList.add(scoreClass);
    }
    button.classList.toggle("active", button.dataset.value === currentValue);
  });
}

function closeScorePopup() {
  scorePopup.classList.remove("open");
  activeScoreKey = "";
}

function openScorePopup(currentButton, key) {
  activeScoreKey = key;
  scorePopup.classList.add("open");
  updateScorePopup();

  const buttonRect = currentButton.getBoundingClientRect();
  const popupRect = scorePopup.getBoundingClientRect();
  const pagePadding = 8;
  const leftLimit = window.scrollX + pagePadding;
  const rightLimit = window.scrollX + document.documentElement.clientWidth - popupRect.width - pagePadding;
  const left = Math.max(leftLimit, Math.min(buttonRect.left + window.scrollX, rightLimit));

  scorePopup.style.left = `${left}px`;
  scorePopup.style.top = `${buttonRect.bottom + window.scrollY + 6}px`;
}

function createScoreButtons() {
  scorePopup.className = "score-popup";
  scorePopup.innerHTML = "";

  for (let score = -10; score <= 10; score += 1) {
    const button = document.createElement("button");
    button.className = `score-button ${getScoreClass(String(score))}`;
    button.type = "button";
    button.dataset.value = String(score);
    button.textContent = score;
    button.hidden = score < 0;

    button.addEventListener("click", (event) => {
      event.stopPropagation();

      if (!activeScoreKey) {
        return;
      }

      observationInputs[activeScoreKey].value = button.dataset.value;
      updateScoreButtons();
      closeScorePopup();
    });

    scorePopup.append(button);
  }

  document.body.append(scorePopup);

  scoreOptionGroups.forEach((group) => {
    const key = group.dataset.scoreFor;
    const currentButton = document.createElement("button");

    group.innerHTML = "";
    currentButton.className = "score-current";
    currentButton.type = "button";
    currentButton.textContent = "-";

    currentButton.addEventListener("click", (event) => {
      event.stopPropagation();

      if (activeScoreKey === key && scorePopup.classList.contains("open")) {
        closeScorePopup();
        return;
      }

      openScorePopup(currentButton, key);
    });

    group.append(currentButton);
  });
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".score-popup") && !event.target.closest(".score-current")) {
    closeScorePopup();
  }
});

window.addEventListener("resize", closeScorePopup);
window.addEventListener("scroll", closeScorePopup);

function getScoreClass(value) {
  const score = Number(value);

  if (value === "" || Number.isNaN(score)) {
    return "";
  }

  if (score < 0) {
    const heaviness = Math.abs(score);

    if (heaviness >= 8) {
      return "score-low";
    }

    if (heaviness >= 5) {
      return "score-warning";
    }

    if (heaviness >= 3) {
      return "score-medium";
    }

    return "score-high";
  }

  if (score <= 2) {
    return "score-low";
  }

  if (score <= 4) {
    return "score-warning";
  }

  if (score <= 7) {
    return "score-medium";
  }

  return "score-high";
}

function getQuestionScoreClass(key, value) {
  const score = Number(value);

  if (value === "" || Number.isNaN(score)) {
    return "";
  }

  if (key === "sustainedAttention") {
    if (score <= 1) {
      return "score-low";
    }

    if (score <= 5) {
      return "score-warning";
    }

    return "score-high";
  }

  if (!negativeQuestionKeys.includes(key)) {
    return getScoreClass(value);
  }

  const heaviness = Math.abs(score);

  if (heaviness === 0) {
    return "score-high";
  }

  if (heaviness >= 6) {
    return "score-low";
  }

  if (heaviness >= 1) {
    return "score-warning";
  }

  return "score-high";
}

function getAverageScore(observation) {
  const scores = Object.keys(observationQuestions)
    .map((key) => ({
      key,
      value: observation[key]
    }))
    .filter(({ key, value }) => {
      if (value === "") {
        return false;
      }

      return !(negativeQuestionKeys.includes(key) && Number(value) === 0);
    })
    .map(({ value }) => Number(value))
    .filter((value) => !Number.isNaN(value));

  if (scores.length === 0) {
    return "-";
  }

  const total = scores.reduce((sum, value) => sum + value, 0);
  return (total / scores.length).toFixed(1);
}

function getDayAverageScore(observation) {
  const slots = getObservationSlots(observation);
  const scores = foodSlotKeys
    .flatMap((slot) => Object.keys(observationQuestions).map((key) => ({
      key,
      value: slots[slot][key]
    })))
    .filter(({ key, value }) => {
      if (value === "") {
        return false;
      }

      return !(negativeQuestionKeys.includes(key) && Number(value) === 0);
    })
    .map(({ value }) => Number(value))
    .filter((value) => !Number.isNaN(value));

  if (scores.length === 0) {
    return "-";
  }

  const total = scores.reduce((sum, value) => sum + value, 0);
  return (total / scores.length).toFixed(1);
}

function getNumericDayAverage(observation) {
  const average = Number(getDayAverageScore(observation));
  return Number.isNaN(average) ? null : average;
}

function createCalendarChip(item) {
  const itemData = fruitLabels[item] || {
    text: item
  };
  const itemChip = document.createElement("span");
  itemChip.className = "calendar-fruit";

  if (itemData.image) {
    itemChip.classList.add("custom-fruit-chip");
    itemChip.style.backgroundImage = `url("${itemData.image}")`;
    itemChip.title = itemData.label;
  } else {
    itemChip.textContent = itemData.text;
    itemChip.title = itemData.text;
  }

  return itemChip;
}

function getMonthLabel(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDateDisplay(dateKey) {
  const match = String(dateKey || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (!match) {
    return dateKey || "";
  }

  const date = new Date(`${match[1]}-${match[2]}-${match[3]}T00:00:00`);
  const month = date.toLocaleDateString("en-US", { month: "short" });

  return `${match[3]} ${month} ${match[1]}`;
}

function parseDateDisplay(value) {
  const trimmedValue = String(value || "").trim();
  const keyMatch = trimmedValue.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (keyMatch) {
    return trimmedValue;
  }

  const displayMatch = trimmedValue.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);

  if (!displayMatch) {
    return getTodayDate();
  }

  const day = displayMatch[1].padStart(2, "0");
  const month = displayMatch[2].padStart(2, "0");
  const year = displayMatch[3];
  const parsedDate = new Date(`${year}-${month}-${day}T00:00:00`);

  if (
    parsedDate.getFullYear() !== Number(year)
    || parsedDate.getMonth() + 1 !== Number(month)
    || parsedDate.getDate() !== Number(day)
  ) {
    return getTodayDate();
  }

  return `${year}-${month}-${day}`;
}

function getObservationDateValue() {
  return observationDate.value || getTodayDate();
}

function setObservationDateValue(dateKey) {
  observationDate.value = dateKey;
  observationDateDisplay.textContent = formatDateDisplay(dateKey);
}

function closeDatePicker() {
  datePickerPanel.hidden = true;
}

function selectObservationDate(dateKey) {
  persistCurrentObservationDraft();
  setObservationDateValue(dateKey);
  visibleDatePickerDate = new Date(`${dateKey}T00:00:00`);
  loadObservation(dateKey);
  closeDatePicker();
  pendingHistoryScrollDate = dateKey;
  highlightHistoryDate(dateKey, true, "auto");
}

function renderDatePicker() {
  datePickerPanel.innerHTML = "";

  const year = visibleDatePickerDate.getFullYear();
  const month = visibleDatePickerDate.getMonth();
  const selectedDate = getObservationDateValue();
  const todayDate = getTodayDate();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstWeekday = (firstDay.getDay() + 6) % 7;

  const header = document.createElement("div");
  header.className = "date-picker-header";

  const previousButton = document.createElement("button");
  previousButton.type = "button";
  previousButton.textContent = "‹";
  previousButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    visibleDatePickerDate = new Date(year, month - 1, 1);
    renderDatePicker();
  });

  const title = document.createElement("strong");
  title.textContent = firstDay.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.textContent = "›";
  nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    visibleDatePickerDate = new Date(year, month + 1, 1);
    renderDatePicker();
  });

  header.append(previousButton, title, nextButton);

  const weekdays = document.createElement("div");
  weekdays.className = "date-picker-weekdays";
  ["M", "T", "W", "T", "F", "S", "S"].forEach((weekday, index) => {
    const label = document.createElement("span");
    label.textContent = weekday;

    if (index >= 5) {
      label.classList.add("weekend");
    }

    weekdays.append(label);
  });

  const days = document.createElement("div");
  days.className = "date-picker-days";

  for (let emptyIndex = 0; emptyIndex < firstWeekday; emptyIndex += 1) {
    const emptyDay = document.createElement("span");
    days.append(emptyDay);
  }

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    const date = new Date(year, month, day);
    const dateKey = formatDateKey(date);
    const dayButton = document.createElement("button");
    dayButton.type = "button";
    dayButton.textContent = String(day);

    if (dateKey === selectedDate) {
      dayButton.classList.add("selected");
    }

    if (dateKey === todayDate) {
      dayButton.classList.add("today");
    }

    if (savedData.observations[dateKey]) {
      dayButton.classList.add("has-history");
    }

    dayButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      selectObservationDate(dateKey);
    });

    days.append(dayButton);
  }

  datePickerPanel.append(header, weekdays, days);
}

function openDatePicker() {
  const selectedDate = getObservationDateValue();
  visibleDatePickerDate = new Date(`${selectedDate}T00:00:00`);
  renderDatePicker();
  datePickerPanel.hidden = false;
}

function renderCalendar() {
  calendarGrid.innerHTML = "";

  const year = visibleCalendarDate.getFullYear();
  const month = visibleCalendarDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstWeekday = (firstDay.getDay() + 6) % 7;

  calendarMonth.textContent = firstDay.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
  const shortMonth = firstDay.toLocaleDateString("en-US", {
    month: "short"
  });

  for (let i = 0; i < firstWeekday; i += 1) {
    const emptyDay = document.createElement("div");
    emptyDay.className = "calendar-day empty";
    calendarGrid.append(emptyDay);
  }

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    try {
      const date = new Date(year, month, day);
      const dateKey = formatDateKey(date);
      const observation = savedData.observations[dateKey];
      const dayButton = document.createElement("button");
      dayButton.className = "calendar-day";
      dayButton.type = "button";
      dayButton.dataset.date = dateKey;

    const dayNumber = document.createElement("span");
    dayNumber.className = "calendar-day-number";
    dayNumber.textContent = `${shortMonth} ${day}`;

    const slotLines = document.createElement("span");
    slotLines.className = "calendar-slot-lines";

    const fasting = document.createElement("span");
    fasting.className = "calendar-fasting";

    if (observation) {
      dayButton.classList.add("has-observation");

      const foodSlots = getObservationFoodSlots(observation);
      const observationSlots = getObservationSlots(observation);
      const snowSlots = getObservationSnowSlots(observation);
      const hasDeadFood = foodSlotKeys.some((slot) => foodSlots[slot].includes("dead-food"));
      const hasTuration = foodSlotKeys.some((slot) => foodSlots[slot].includes("turation"));

      if (hasDeadFood) {
        dayButton.classList.add("dead-food-day");
      }

      if (hasTuration) {
        dayButton.classList.add("turation-day");
      }

      foodSlotKeys.forEach((slot) => {
        const slotRow = document.createElement("span");
        const slotActivities = document.createElement("span");
        const slotScore = document.createElement("span");
        const slotAverage = document.createElement("span");
        const slotSnow = document.createElement("span");
        const slotMarkers = document.createElement("span");
        const slotFruits = document.createElement("span");
        const slotObservation = observationSlots[slot];
        const slotAverageScore = getAverageScore(slotObservation);

        slotRow.className = "calendar-food-slot";
        slotActivities.className = "calendar-food-slot-activities";
        slotScore.className = "calendar-food-slot-score";
        slotAverage.className = "calendar-food-slot-average";
        slotSnow.className = "calendar-snow-slot";
        slotMarkers.className = "calendar-food-slot-markers";
        slotFruits.className = "calendar-food-slot-fruits";
        slotAverage.textContent = slotAverageScore;

        if (snowSlots[slot]) {
          slotSnow.textContent = "❄️";
          slotSnow.title = `${foodSlotLabels[slot]} Snow`;
        }

        Object.keys(observationQuestions).forEach((key) => {
          const score = Number(slotObservation[key]);
          const isNegativeQuestion = negativeQuestionKeys.includes(key);

          if (isNegativeQuestion && score === 0) {
            return;
          }

          const marker = document.createElement("span");
          const dashLength = Number.isNaN(score) ? 4 : 4 + Math.min(Math.abs(score), 8);

          marker.className = `calendar-slot-dash ${getQuestionScoreClass(key, slotObservation[key])}`.trim();
          marker.classList.toggle("negative", isNegativeQuestion);
          marker.style.height = `${dashLength}px`;
          marker.title = `${foodSlotLabels[slot]} ${observationQuestions[key]}: ${slotObservation[key] || "-"}`;
          slotMarkers.append(marker);
        });

        foodSlots[slot].forEach((fruit) => {
          const isActivity = activityKeys.includes(fruit);
          const fruitChip = createCalendarChip(fruit);

          if (isActivity) {
            slotActivities.append(fruitChip);
          } else {
            slotFruits.append(fruitChip);
          }
        });

        slotScore.append(slotAverage, slotSnow);
        slotRow.append(slotActivities, slotScore, slotMarkers, slotFruits);
        slotLines.append(slotRow);
      });

      if (observation.fasting) {
        dayButton.classList.add("fasting-day");
        fasting.innerHTML = `
          <span class="fasting-stars" aria-hidden="true">
            <span class="star star-large"></span>
            <span class="star star-small"></span>
          </span>
        `;
        fasting.title = "Fasting";
      }

    } else {
    }

    dayButton.addEventListener("click", () => {
      selectObservationDate(dateKey);

      calendarGrid.querySelectorAll(".calendar-day.expanded").forEach((expandedDay) => {
        if (expandedDay !== dayButton) {
          expandedDay.classList.remove("expanded");
        }
      });

      dayButton.classList.toggle("expanded");
    });

    dayButton.addEventListener("dblclick", () => {
      showSection("observation");
      selectObservationDate(dateKey);
    });

      dayButton.append(dayNumber, slotLines, fasting);
      calendarGrid.append(dayButton);
    } catch (error) {
      const date = new Date(year, month, day);
      const fallbackDay = document.createElement("button");
      const dayNumber = document.createElement("span");
      const message = document.createElement("span");

      fallbackDay.className = "calendar-day calendar-day-error";
      fallbackDay.type = "button";
      fallbackDay.dataset.date = formatDateKey(date);
      fallbackDay.title = error?.message || "Saved data error";
      dayNumber.className = "calendar-day-number";
      dayNumber.textContent = `${shortMonth} ${day}`;
      message.className = "calendar-error-note";
      message.textContent = "Data error";

      fallbackDay.addEventListener("click", () => {
        selectObservationDate(formatDateKey(date));
      });

      fallbackDay.addEventListener("dblclick", () => {
        showSection("observation");
        selectObservationDate(formatDateKey(date));
      });

      fallbackDay.append(dayNumber, message);
      calendarGrid.append(fallbackDay);
    }
  }
}

function renderObservationHistory(shouldScrollSelected = false) {
  if (!observationHistory) {
    return;
  }

  observationHistory.innerHTML = "";

  const dates = Object.keys(savedData.observations).sort().reverse();

  if (dates.length === 0) {
    const empty = document.createElement("p");
    empty.className = "history-empty";
    empty.textContent = "No saved days yet.";
    observationHistory.append(empty);
    return;
  }

  const numericDays = dates
    .map((date) => ({
      date,
      average: getNumericDayAverage(savedData.observations[date])
    }))
    .filter((day) => day.average !== null);
  const summary = document.createElement("section");
  summary.className = "history-summary";

  const totalDaysCard = document.createElement("article");
  const totalDaysLabel = document.createElement("span");
  const totalDaysValue = document.createElement("strong");
  totalDaysLabel.textContent = "Saved days";
  totalDaysValue.textContent = dates.length;
  totalDaysCard.append(totalDaysLabel, totalDaysValue);

  const averageCard = document.createElement("article");
  const averageLabel = document.createElement("span");
  const averageValue = document.createElement("strong");
  const overallAverage = numericDays.length
    ? (numericDays.reduce((sum, day) => sum + day.average, 0) / numericDays.length).toFixed(1)
    : "-";
  averageLabel.textContent = "Average";
  averageValue.className = getScoreClass(overallAverage);
  averageValue.textContent = overallAverage;
  averageCard.append(averageLabel, averageValue);

  const bestCard = document.createElement("article");
  const bestLabel = document.createElement("span");
  const bestValue = document.createElement("strong");
  const bestDay = numericDays.length
    ? numericDays.reduce((best, day) => (day.average > best.average ? day : best), numericDays[0])
    : null;
  bestLabel.textContent = "Best day";
  bestValue.textContent = bestDay
    ? `${new Date(`${bestDay.date}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" })} · ${bestDay.average.toFixed(1)}`
    : "-";
  bestCard.append(bestLabel, bestValue);

  const trendCard = document.createElement("article");
  const trendLabel = document.createElement("span");
  const trendValue = document.createElement("strong");
  const latestDay = numericDays[0];
  const previousDay = numericDays[1];
  trendLabel.textContent = "Last change";

  if (latestDay && previousDay) {
    const difference = latestDay.average - previousDay.average;
    trendValue.textContent = `${difference >= 0 ? "+" : ""}${difference.toFixed(1)}`;
    trendValue.className = difference >= 0 ? "score-high" : "score-low";
  } else {
    trendValue.textContent = "-";
  }

  trendCard.append(trendLabel, trendValue);
  summary.append(totalDaysCard, averageCard, bestCard, trendCard);
  observationHistory.append(summary);

  const scrollDays = document.createElement("div");
  scrollDays.className = "history-scroll-days";

  const groupedDates = {};

  dates.forEach((date) => {
    const month = getMonthLabel(date);

    if (!groupedDates[month]) {
      groupedDates[month] = [];
    }

    groupedDates[month].push(date);
  });

  Object.keys(groupedDates).forEach((month) => {
    const group = document.createElement("section");
    group.className = "history-month";

    const title = document.createElement("h4");
    title.textContent = month;

    const days = document.createElement("div");
    days.className = "history-days";

    groupedDates[month].forEach((date) => {
      const observation = savedData.observations[date];
      const dayButton = document.createElement("button");
      dayButton.className = "history-day";
      dayButton.type = "button";

      const dayNumber = document.createElement("span");
      dayNumber.className = "history-date";
      dayNumber.textContent = new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short"
      });

      const average = document.createElement("span");
      const averageScore = getDayAverageScore(observation);
      average.className = `history-average ${getScoreClass(averageScore)}`.trim();
      average.textContent = averageScore;

      const markers = document.createElement("span");
      markers.className = "history-markers";

      const slots = getObservationSlots(observation);

      foodSlotKeys.forEach((slot) => {
        Object.keys(observationQuestions).forEach((key) => {
          const value = slots[slot][key];

          if (value === "") {
            return;
          }

          const marker = document.createElement("span");
          const score = Number(value);
          const dashHeight = Number.isNaN(score) ? 8 : 6 + Math.abs(score);

          marker.className = `history-dash ${getQuestionScoreClass(key, value)}`.trim();
          marker.style.height = `${dashHeight}px`;
          marker.title = `${foodSlotLabels[slot]} ${observationQuestions[key]}: ${value}`;
          markers.append(marker);
        });
      });

      const deleteButton = document.createElement("button");
      deleteButton.className = "history-delete";
      deleteButton.type = "button";
      deleteButton.textContent = "Clear";

      dayButton.addEventListener("click", () => {
        selectObservationDate(date);
      });

      deleteButton.addEventListener("click", async () => {
        const shouldDelete = await askForConfirmation({
          title: "Clear saved day?",
          message: `Clear observation for ${formatDateDisplay(date)}?`,
          confirmText: "Clear"
        });

        if (!shouldDelete) {
          return;
        }

        delete savedData.observations[date];
        saveData();

        if (getObservationDateValue() === date) {
          loadObservation(date);
        }

        renderObservationHistory();
        renderCalendar();
      });

      const dayRow = document.createElement("div");
      dayRow.className = "history-day-row";
      dayRow.dataset.date = date;
      dayButton.append(dayNumber, average, markers);
      dayRow.append(dayButton, deleteButton);
      days.append(dayRow);
    });

    group.append(title, days);
    scrollDays.append(group);
  });

  observationHistory.append(scrollDays);
  highlightHistoryDate(getObservationDateValue(), shouldScrollSelected);
}

function highlightHistoryDate(date, shouldScroll = true, behavior = "smooth") {
  if (!observationHistory || !date) {
    return false;
  }

  observationHistory.querySelectorAll(".history-day-row.active").forEach((row) => {
    row.classList.remove("active");
  });

  const activeRow = observationHistory.querySelector(`.history-day-row[data-date="${date}"]`);

  if (!activeRow) {
    return false;
  }

  activeRow.classList.add("active");

  if (shouldScroll) {
    const scrollDays = observationHistory.querySelector(".history-scroll-days") || observationHistory;

    if (scrollDays.clientHeight === 0 || activeRow.offsetHeight === 0) {
      pendingHistoryScrollDate = date;
      return false;
    }

    const scrollRect = scrollDays.getBoundingClientRect();
    const activeRect = activeRow.getBoundingClientRect();
    const targetTop = scrollDays.scrollTop
      + activeRect.top
      - scrollRect.top
      - (scrollDays.clientHeight / 2)
      + (activeRow.offsetHeight / 2);

    if (behavior === "smooth") {
      scrollDays.scrollTo({
        top: Math.max(0, targetTop),
        behavior
      });
    } else {
      scrollDays.scrollTop = Math.max(0, targetTop);
    }
  }

  return true;
}

sectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showSection(button.dataset.section);
  });
});

diaryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addEntry("diary", diaryInput, diaryList);
});

documentInput.addEventListener("change", () => {
  organizeFiles([...documentInput.files]);
  documentInput.value = "";
});

fileDropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  fileDropZone.classList.add("dragging");
});

fileDropZone.addEventListener("dragleave", () => {
  fileDropZone.classList.remove("dragging");
});

fileDropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  fileDropZone.classList.remove("dragging");
  organizeFiles([...event.dataTransfer.files]);
});

complaintsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addEntry("complaints", complaintsInput, complaintsList);
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();

  if (text === "") {
    return;
  }

  savedData.tasks.push({
    text,
    done: false
  });

  taskInput.value = "";
  saveData();
  renderTasks();
});

foundationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = foundationInput.value.trim();

  if (text === "") {
    return;
  }

  savedData.foundations.push({
    text,
    date: new Date().toLocaleString(),
    manual: false
  });

  foundationInput.value = "";
  saveData();
  renderFoundations();
});

foundationEditModeButton.addEventListener("click", () => {
  foundationMode = foundationMode === "edit" ? "view" : "edit";
  renderFoundations();
});

foundationDeleteModeButton.addEventListener("click", () => {
  foundationMode = foundationMode === "delete" ? "view" : "delete";
  renderFoundations();
});

setObservationDateValue(getTodayDate());
setActiveFoodSlot(getCurrentFoodSlot());
createScoreButtons();
loadObservation(getObservationDateValue());

observationDate.addEventListener("change", () => {
  selectObservationDate(getObservationDateValue());
});

datePickerPanel.addEventListener("mousedown", (event) => {
  event.preventDefault();
  event.stopPropagation();
});

datePickerPanel.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
});

observationDateDisplay.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (datePickerPanel.hidden) {
    openDatePicker();
    return;
  }

  closeDatePicker();
});

document.addEventListener("click", (event) => {
  if (datePickerPanel.hidden || event.target.closest(".date-picker-wrap")) {
    return;
  }

  closeDatePicker();
});

foodSlotInputs.forEach((input) => {
  input.addEventListener("change", () => {
    persistCurrentObservationDraft();
    loadObservation(getObservationDateValue());
  });
});

Object.values(observationInputs).forEach((input) => {
  input.addEventListener("change", () => {
    input.blur();
  });
});

goToCalendarButton.addEventListener("click", () => {
  showSection("calendar");
});

chooseBackupFolderButton.addEventListener("click", async () => {
  if (!("showDirectoryPicker" in window)) {
    alert(`Folder backup works in Chrome with localhost. Open the app at ${window.location.origin} and try again.`);
    return;
  }

  try {
    const directoryHandle = await window.showDirectoryPicker({ mode: "readwrite" });
    const hasPermission = await requestBackupWritePermission(directoryHandle);

    if (!hasPermission) {
      alert("Chrome did not allow writing to this folder.");
      return;
    }

    backupDirectoryHandle = directoryHandle;
    await setStoredBackupDirectory(directoryHandle);
    await writeAutomaticBackup();
    alert("Backup folder selected. The app will save backup files there automatically.");
  } catch (error) {
    if (error.name !== "AbortError") {
      alert("Could not choose this folder.");
    }
  }
});

importBackupButton.addEventListener("click", () => {
  backupFileInput.click();
});

backupFileInput.addEventListener("change", () => {
  const [backupFile] = backupFileInput.files;

  if (backupFile) {
    importBackup(backupFile);
  }

  backupFileInput.value = "";
});

observationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  persistCurrentObservationDraft();
  const date = getObservationDateValue();
  const draft = getObservationDraft(date);
  savedData.observations[date] = createSavedObservationFromDraft(draft);

  saveData();
  renderObservationHistory(true);
  renderCalendar();
});

clearObservationButton.addEventListener("click", async () => {
  const date = getObservationDateValue();
  const shouldDelete = await askForConfirmation({
    title: "Clear this day?",
    message: `Clear observation for ${formatDateDisplay(date)}?`,
    confirmText: "Clear"
  });

  if (!shouldDelete) {
    return;
  }

  delete savedData.observations[date];
  delete observationDrafts[date];
  saveData();
  loadObservation(date);
  renderObservationHistory();
  renderCalendar();
});

previousMonthButton.addEventListener("click", () => {
  visibleCalendarDate = new Date(
    visibleCalendarDate.getFullYear(),
    visibleCalendarDate.getMonth() - 1,
    1
  );
  renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
  visibleCalendarDate = new Date(
    visibleCalendarDate.getFullYear(),
    visibleCalendarDate.getMonth() + 1,
    1
  );
  renderCalendar();
});

renderEntries(savedData.diary, diaryList, "diary");
renderEntries(savedData.complaints, complaintsList, "complaints");
renderDocuments();
renderBasicFolder();
renderTasks();
renderFoundations();
renderObservationHistory();
renderCalendar();
initializeBackupFolder();
