import type {
  CaseIndustrySegment,
  ServiceCategory,
  Client,
  DetailedCaseStudy,
  Testimonial,
} from "./types";

// ─────────────────────────────────────────────
// Industry Segments
// ─────────────────────────────────────────────

export const industrySegments: CaseIndustrySegment[] = [
  { id: "industry-manufacturing", name: "Промышленность", slug: "promyshlennost" },
  { id: "industry-logistics", name: "Логистика", slug: "logistika" },
  { id: "industry-retail", name: "Ритейл", slug: "ritejl" },
  { id: "industry-pharma", name: "Фармацевтика", slug: "farmatsevtika" },
  { id: "industry-metallurgy", name: "Металлургия", slug: "metallurgiya" },
  { id: "industry-service", name: "Сервис", slug: "servis" },
];

// ─────────────────────────────────────────────
// Service Categories
// ─────────────────────────────────────────────

export const serviceCategories: ServiceCategory[] = [
  { id: "svc-lean", name: "Бережливое производство", slug: "berezhlivoe-proizvodstvo" },
  { id: "svc-safety", name: "Производственная безопасность", slug: "proizvodstvennaya-bezopasnost" },
  { id: "svc-soft-skills", name: "Soft Skills", slug: "soft-skills" },
  { id: "svc-sales", name: "Продажи и переговоры", slug: "prodazhi-i-peregovory" },
  { id: "svc-management", name: "Управление и лидерство", slug: "upravlenie-i-liderstvo" },
];

// ─────────────────────────────────────────────
// Clients
// ─────────────────────────────────────────────

export const clients: Client[] = [
  { id: "client-norilsk", name: "НорильскНикель", logoUrl: "/logos/norilsk-nickel.svg", industryId: "industry-metallurgy" },
  { id: "client-sibur", name: "СИБУР", logoUrl: "/logos/sibur.svg", industryId: "industry-manufacturing" },
  { id: "client-severstal", name: "Северсталь", logoUrl: "/logos/severstal.svg", industryId: "industry-metallurgy" },
  { id: "client-delovye-linii", name: "Деловые Линии", logoUrl: "/logos/delovye-linii.svg", industryId: "industry-logistics" },
  { id: "client-pharmstandard", name: "Фармстандарт", logoUrl: "/logos/pharmstandard.svg", industryId: "industry-pharma" },
  { id: "client-magnit", name: "Магнит", logoUrl: "/logos/magnit.svg", industryId: "industry-retail" },
  { id: "client-omk", name: "ОМК", logoUrl: "/logos/omk.svg", industryId: "industry-manufacturing" },
  { id: "client-hilton", name: "Hilton", logoUrl: "/logos/hilton.svg", industryId: "industry-service" },
];

// ─────────────────────────────────────────────
// Case Studies
// ─────────────────────────────────────────────

export const caseStudies: DetailedCaseStudy[] = [
  {
    id: "case-norilsk-lean",
    title: "Lean-трансформация обогатительной фабрики",
    slug: "lean-transformatsiya-obogatitelnoy-fabriki",
    clientId: "client-norilsk",
    industryId: "industry-metallurgy",
    serviceCategoryId: "svc-lean",
    challenge:
      "Высокий уровень производственных потерь на обогатительной фабрике: простои оборудования до 18% рабочего времени, потери сырья на переделах, отсутствие системы непрерывных улучшений. Руководство поставило задачу сократить потери без капитальных вложений.",
    solution:
      "Провели картирование потоков создания ценности (VSM) на 4 ключевых участках. Выявили 12 источников потерь. Внедрили систему 5S, визуальное управление и стандартизированную работу. Обучили 120 сотрудников инструментам Lean, сформировали команду из 8 внутренних Lean-лидеров. Запустили систему Кайдзен-предложений.",
    metrics: [
      { label: "Сокращение потерь", value: "\u221240%" },
      { label: "Простои оборудования", value: "\u221255%" },
      { label: "Обучено сотрудников", value: "120", suffix: "чел." },
      { label: "Кайдзен-предложений за год", value: "340", suffix: "шт." },
    ],
    phases: [
      { id: "phase-1", title: "Диагностика и VSM", description: "Картирование потоков на 4 участках, хронометраж операций, интервью с мастерами смен" },
      { id: "phase-2", title: "Пилотный участок", description: "Внедрение 5S и визуального управления на участке дробления. Обучение первой группы (30 чел.)" },
      { id: "phase-3", title: "Масштабирование", description: "Распространение практик на участки флотации, фильтрации и сушки. Подготовка Lean-лидеров" },
      { id: "phase-4", title: "Закрепление", description: "Аудит внедрённых практик, запуск системы Кайдзен-предложений, формирование плана развития" },
    ],
    imageUrls: ["/cases/norilsk-lean-1.jpg", "/cases/norilsk-lean-2.jpg", "/cases/norilsk-lean-3.jpg"],
    testimonialId: "testimonial-norilsk",
  },
  {
    id: "case-delovye-safety",
    title: "Построение культуры безопасности на складских комплексах",
    slug: "postroenie-kultury-bezopasnosti",
    clientId: "client-delovye-linii",
    industryId: "industry-logistics",
    serviceCategoryId: "svc-safety",
    challenge:
      "Рост числа инцидентов на складских комплексах: за предыдущий год 14 инцидентов с потерей рабочего времени. Низкая вовлечённость линейного персонала в вопросы безопасности, формальное отношение к инструктажам.",
    solution:
      "Провели аудит культуры безопасности по шкале Бредли на 5 складских комплексах. Разработали стандарты безопасности и процедуры расследования. Обучили 350+ сотрудников, включая руководителей \u2014 тренинг \u00abЛидерство в безопасности\u00bb. Внедрили систему поведенческих аудитов (BBS) и программу \u00abПраво остановить работу\u00bb.",
    metrics: [
      { label: "Инциденты с потерей времени", value: "0", suffix: "за 12 мес." },
      { label: "Обучено сотрудников", value: "350+", suffix: "чел." },
      { label: "Поведенческих аудитов", value: "1200", suffix: "в год" },
      { label: "Вовлечённость персонала", value: "+65%" },
    ],
    phases: [
      { id: "phase-1", title: "Аудит безопасности", description: "Оценка по шкале Бредли на 5 комплексах, анализ статистики инцидентов за 3 года" },
      { id: "phase-2", title: "Разработка стандартов", description: "Обновление процедур безопасности, создание матрицы рисков, визуальные стандарты" },
      { id: "phase-3", title: "Обучение персонала", description: "Тренинги для руководителей и линейного персонала, сертификация внутренних аудиторов" },
      { id: "phase-4", title: "Внедрение BBS", description: "Запуск поведенческих аудитов, программы \u00abПраво остановить работу\u00bb, система отчётности" },
    ],
    imageUrls: ["/cases/delovye-safety-1.jpg", "/cases/delovye-safety-2.jpg"],
    testimonialId: "testimonial-delovye",
  },
  {
    id: "case-pharmstandard-lean",
    title: "Оптимизация производственных линий",
    slug: "optimizatsiya-proizvodstvennyh-liniy",
    clientId: "client-pharmstandard",
    industryId: "industry-pharma",
    serviceCategoryId: "svc-lean",
    challenge:
      "Необходимость увеличить выпуск продукции на 25% без расширения штата и оборудования. Высокое время переналадки между сериями, потери на ожидании и транспортировке между цехами.",
    solution:
      "Применили методологию SMED для сокращения времени переналадки. Оптимизировали внутрицеховую логистику, внедрили систему визуального управления и обучили мастеров смен принципам Lean. Провели 6 Кайдзен-мероприятий с участием операторов линий.",
    metrics: [
      { label: "Рост производительности", value: "+25%" },
      { label: "Время переналадки", value: "\u221260%" },
      { label: "Потери на транспортировку", value: "\u221235%" },
    ],
    phases: [
      { id: "phase-1", title: "Анализ процессов", description: "Хронометраж линий, анализ переналадок, картирование перемещений материалов" },
      { id: "phase-2", title: "SMED-проект", description: "Разделение внутренней и внешней наладки, стандартизация процедур переключения" },
      { id: "phase-3", title: "Оптимизация логистики", description: "Реорганизация межцехового потока, внедрение канбан-системы пополнения" },
      { id: "phase-4", title: "Обучение и закрепление", description: "Тренинги для мастеров, серия Кайдзен-мероприятий, стандартизация лучших практик" },
    ],
    imageUrls: ["/cases/pharmstandard-lean-1.jpg", "/cases/pharmstandard-lean-2.jpg"],
    testimonialId: "testimonial-pharmstandard",
  },
  {
    id: "case-magnit-sales",
    title: "Программа развития навыков продаж для региональных менеджеров",
    slug: "programma-razvitiya-navykov-prodazh",
    clientId: "client-magnit",
    industryId: "industry-retail",
    serviceCategoryId: "svc-sales",
    challenge:
      "Снижение конверсии коммерческих предложений в контракты на 15% за год. Региональные менеджеры по продажам используют устаревшие подходы, не умеют работать с возражениями крупных клиентов и вести переговоры на уровне C-level.",
    solution:
      "Разработали кастомную программу из 4 модулей: анализ потребностей клиента, построение ценностного предложения, работа с возражениями, переговорные стратегии. Провели тренинги для 80 менеджеров с ролевыми играми на реальных кейсах. Внедрили систему пост-тренингового сопровождения \u2014 еженедельные групповые разборы сделок.",
    metrics: [
      { label: "Конверсия КП в контракты", value: "+28%" },
      { label: "Средний чек", value: "+18%" },
      { label: "Обучено менеджеров", value: "80", suffix: "чел." },
    ],
    phases: [
      { id: "phase-1", title: "Диагностика", description: "Аудит текущих навыков через ассессмент, анализ воронки продаж, интервью с руководителями" },
      { id: "phase-2", title: "Разработка программы", description: "4 модуля с кейсами из практики компании, ролевые игры, чек-листы" },
      { id: "phase-3", title: "Обучение", description: "2 потока по 40 человек, 4 модуля \u00d7 2 дня, практика на реальных сделках" },
      { id: "phase-4", title: "Сопровождение", description: "12 недель групповых разборов, индивидуальный коучинг топ-перформеров" },
    ],
    imageUrls: ["/cases/magnit-sales-1.jpg"],
    testimonialId: "testimonial-magnit",
  },
  {
    id: "case-sibur-management",
    title: "Развитие управленческих компетенций руководителей производства",
    slug: "razvitie-upravlencheskih-kompetentsiy",
    clientId: "client-sibur",
    industryId: "industry-manufacturing",
    serviceCategoryId: "svc-management",
    challenge:
      "Руководители производственных подразделений продвинуты из специалистов и не имеют управленческой подготовки. Высокая текучесть в командах (22%), низкие результаты оценки 360\u00b0 по компетенциям \u00abуправление людьми\u00bb и \u00abобратная связь\u00bb.",
    solution:
      "Провели оценку 360\u00b0 для 45 руководителей, определили ключевые зоны развития. Разработали модульную программу: лидерство, управление командой, обратная связь, управление конфликтами. Обеспечили 6 месяцев индивидуального коучинга для каждого участника.",
    metrics: [
      { label: "Текучесть в командах", value: "\u221240%" },
      { label: "Результаты 360\u00b0", value: "+35%" },
      { label: "Обучено руководителей", value: "45", suffix: "чел." },
      { label: "eNPS команд", value: "+30", suffix: "пунктов" },
    ],
    phases: [
      { id: "phase-1", title: "Оценка 360\u00b0", description: "Диагностика управленческих компетенций, определение индивидуальных планов развития" },
      { id: "phase-2", title: "Модульное обучение", description: "4 модуля по 2 дня с разбором реальных ситуаций из практики участников" },
      { id: "phase-3", title: "Коучинг", description: "6 месяцев индивидуального коучинга, работа над реальными управленческими задачами" },
    ],
    imageUrls: ["/cases/sibur-mgmt-1.jpg", "/cases/sibur-mgmt-2.jpg"],
    testimonialId: "testimonial-sibur",
  },
  {
    id: "case-severstal-safety",
    title: "Снижение аварийности на прокатных станах",
    slug: "snizhenie-avariynosti-na-prokatnyh-stanah",
    clientId: "client-severstal",
    industryId: "industry-metallurgy",
    serviceCategoryId: "svc-safety",
    challenge:
      "Повторяющиеся инциденты на прокатных станах, несмотря на формальное соблюдение требований ОТ. За последние 2 года \u2014 8 инцидентов категории \u00abсерьёзный\u00bb, 3 из них с временной нетрудоспособностью. Расследования показывают системные проблемы: недостаточная идентификация рисков, формальные инструктажи, отсутствие проактивного подхода к безопасности среди линейных руководителей.",
    solution:
      "Провели глубокий аудит системы управления безопасностью на 3 прокатных станах. Перестроили процедуру идентификации рисков (HAZID) с вовлечением операторов. Разработали и провели программу \u00abЛидерство в безопасности\u00bb для 60 руководителей. Внедрили систему \u00abкрасных флагов\u00bb \u2014 мгновенного реагирования на предпосылки инцидентов. Запустили еженедельные обходы безопасности с участием топ-менеджмента.",
    metrics: [
      { label: "Серьёзные инциденты", value: "\u221285%" },
      { label: "Предпосылки выявлено", value: "450+", suffix: "за год" },
      { label: "Обучено руководителей", value: "60", suffix: "чел." },
    ],
    phases: [
      { id: "phase-1", title: "Аудит системы безопасности", description: "Анализ инцидентов за 3 года, оценка процедур на 3 прокатных станах, интервью с персоналом" },
      { id: "phase-2", title: "Перестройка процедур", description: "Обновление HAZID с вовлечением операторов, разработка системы \u00abкрасных флагов\u00bb" },
      { id: "phase-3", title: "Обучение руководителей", description: "Программа \u00abЛидерство в безопасности\u00bb для 60 линейных и средних руководителей" },
      { id: "phase-4", title: "Внедрение практик", description: "Запуск обходов безопасности, системы реагирования, мониторинг показателей" },
    ],
    imageUrls: ["/cases/severstal-safety-1.jpg", "/cases/severstal-safety-2.jpg", "/cases/severstal-safety-3.jpg"],
    testimonialId: null,
  },
  {
    id: "case-hilton-soft",
    title: "Программа сервисного совершенства для персонала отелей",
    slug: "programma-servisnogo-sovershenstva",
    clientId: "client-hilton",
    industryId: "industry-service",
    serviceCategoryId: "svc-soft-skills",
    challenge:
      "Снижение индекса удовлетворённости гостей (GSI) на 12 пунктов за год. Основные жалобы: медленная реакция на запросы, неумение работать с конфликтными ситуациями, отсутствие проактивного сервиса. Текучесть линейного персонала \u2014 45% в год.",
    solution:
      "Разработали программу \u00abСервисное совершенство\u00bb из 3 модулей: эмпатия и активное слушание, работа с жалобами и конфликтами, проактивный сервис. Провели тренинги для 200+ сотрудников 4 отелей. Внедрили систему внутренних сервис-чемпионов \u2014 по 2 человека на отель, прошедших расширенную подготовку.",
    metrics: [
      { label: "Индекс GSI", value: "+18", suffix: "пунктов" },
      { label: "Текучесть персонала", value: "\u221230%" },
      { label: "Обучено сотрудников", value: "200+", suffix: "чел." },
      { label: "Повторные визиты", value: "+22%" },
    ],
    phases: [
      { id: "phase-1", title: "Аудит сервиса", description: "Mystery shopping, анализ отзывов, интервью с персоналом и менеджерами" },
      { id: "phase-2", title: "Разработка программы", description: "3 модуля с адаптацией под стандарты бренда, ролевые игры на реальных кейсах" },
      { id: "phase-3", title: "Обучение", description: "Тренинги для 200+ сотрудников, подготовка 8 сервис-чемпионов" },
      { id: "phase-4", title: "Сопровождение", description: "3 месяца мониторинга GSI, корректировка подходов, закрепление практик" },
    ],
    imageUrls: ["/cases/hilton-soft-1.jpg", "/cases/hilton-soft-2.jpg"],
    testimonialId: "testimonial-hilton",
  },
];

// ─────────────────────────────────────────────
// Testimonials
// ─────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-norilsk",
    caseStudyId: "case-norilsk-lean",
    authorName: "Алексей Петров",
    authorRole: "Директор по производству",
    companyName: "НорильскНикель",
    text: "За 6 месяцев работы с PDCA Consulting мы кардинально изменили подход к управлению производством. Команда консультантов не просто провела тренинги \u2014 они помогли выстроить систему, которая продолжает работать и приносить результат после завершения проекта. Особенно ценно, что подготовленные Lean-лидеры сами инициируют улучшения.",
  },
  {
    id: "testimonial-delovye",
    caseStudyId: "case-delovye-safety",
    authorName: "Марина Козлова",
    authorRole: "Руководитель службы ОТиПБ",
    companyName: "Деловые Линии",
    text: "Результат превзошёл ожидания. Ноль серьёзных инцидентов за год \u2014 это не просто цифра, это показатель того, что культура безопасности стала частью ДНК наших складских комплексов. Поведенческие аудиты реально работают \u2014 люди начали замечать и устранять риски сами.",
  },
  {
    id: "testimonial-pharmstandard",
    caseStudyId: "case-pharmstandard-lean",
    authorName: "Игорь Волков",
    authorRole: "Технический директор",
    companyName: "Фармстандарт",
    text: "Нам нужно было увеличить выпуск на 25% без дополнительных инвестиций \u2014 казалось невозможным. Консультанты PDCA нашли резервы, которые мы сами не видели. Метод SMED сократил переналадку втрое, а обученные мастера теперь сами проводят Кайдзен-мероприятия.",
  },
  {
    id: "testimonial-magnit",
    caseStudyId: "case-magnit-sales",
    authorName: "Елена Соколова",
    authorRole: "Коммерческий директор",
    companyName: "Магнит",
    text: "Программа была построена полностью на наших реальных кейсах \u2014 менеджеры практиковались на ситуациях, которые встречают каждый день. Конверсия выросла уже в первый месяц после обучения. Система еженедельных разборов оказалась настоящей находкой.",
  },
  {
    id: "testimonial-sibur",
    caseStudyId: "case-sibur-management",
    authorName: "Дмитрий Краснов",
    authorRole: "HR-директор",
    companyName: "СИБУР",
    text: "Наши руководители были отличными специалистами, но слабыми управленцами. Программа PDCA Consulting дала им и знания, и практический опыт. Индивидуальный коучинг закрепил результат. Текучесть в их командах упала почти вдвое \u2014 люди хотят работать с хорошими руководителями.",
  },
  {
    id: "testimonial-hilton",
    caseStudyId: "case-hilton-soft",
    authorName: "Анна Белова",
    authorRole: "Региональный директор по операциям",
    companyName: "Hilton",
    text: "Сервис-чемпионы \u2014 лучшее, что мы получили от этого проекта. Они не только поддерживают стандарты, но и обучают новых сотрудников. Индекс удовлетворённости гостей вырос на 18 пунктов, а число повторных визитов \u2014 на 22%. Инвестиция, которая окупилась многократно.",
  },
];

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

export function getCaseBySlug(slug: string): DetailedCaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getClientById(id: string): Client | undefined {
  return clients.find((c) => c.id === id);
}

export function getTestimonialByCaseId(caseId: string): Testimonial | undefined {
  return testimonials.find((t) => t.caseStudyId === caseId);
}
