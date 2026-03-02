import type {
  Category,
  Training,
  TrainingFormat,
  TrainingLevel,
  TrainingDetail,
} from "@/data/types";

// ─────────────────────────────────────────────
// Label maps
// ─────────────────────────────────────────────

export const FORMAT_LABELS: Record<TrainingFormat, string> = {
  offline: "Офлайн",
  online: "Онлайн",
  hybrid: "Гибрид",
};

export const LEVEL_LABELS: Record<TrainingLevel, string> = {
  managers: "Руководители",
  "line-staff": "Линейный персонал",
  office: "Офис",
  all: "Все уровни",
};

// ─────────────────────────────────────────────
// Categories
// ─────────────────────────────────────────────

export const categories: Category[] = [
  { id: "lean", name: "Кайдзен и Бережливое производство", slug: "kajdzen-berezhlivoe-proizvodstvo" },
  { id: "safety", name: "Безопасность", slug: "bezopasnost" },
  { id: "sales", name: "Продажи и переговоры", slug: "prodazhi-i-peregovory" },
  { id: "leadership", name: "Управление и лидерство", slug: "upravlenie-i-liderstvo" },
  { id: "personal", name: "Персональная эффективность", slug: "personalnaya-effektivnost" },
  { id: "communication", name: "Коммуникации и фасилитация", slug: "kommunikatsii-i-fasilitatsiya" },
];

// ─────────────────────────────────────────────
// Default trainer (for minimal details)
// ─────────────────────────────────────────────

const defaultTrainer = {
  id: "trainer-01",
  name: "Алексей Петров",
  role: "Старший тренер-консультант",
  photo: "/images/trainers/trainer-01.jpg",
  credentials: [
    "Сертифицированный Lean Six Sigma Black Belt",
    "15+ лет опыта внедрения Lean на производствах",
    "Провёл 200+ тренингов для 50+ предприятий",
  ],
  profileUrl: "/team/trainer-01",
};

const defaultPricing = {
  note: "Стоимость зависит от формата и количества участников. Свяжитесь с нами для расчёта.",
};

// ─────────────────────────────────────────────
// Helper: get categoryName by categoryId
// ─────────────────────────────────────────────

function getCategoryName(categoryId: string): string {
  return categories.find((c) => c.id === categoryId)?.name ?? "";
}

// ─────────────────────────────────────────────
// All trainings with full detail data
// ─────────────────────────────────────────────

export const trainings: TrainingDetail[] = [
  // ═══════ t-01: Основы бережливого производства (FULL) ═══════
  {
    id: "t-01",
    title: "Основы бережливого производства (Lean)",
    slug: "osnovy-berezhlivogo-proizvodstva",
    categoryId: "lean",
    categoryName: "Кайдзен и Бережливое производство",
    description:
      "Комплексное введение в философию и инструменты Lean для производственных команд. Участники освоят ключевые концепции бережливого производства — от выявления 7 видов потерь до построения карты потока создания ценности. Практические упражнения на реальных процессах предприятия.",
    duration: "2 дня",
    format: ["offline", "online"],
    level: "all",
    keyResult: "Участники определяют 7 видов потерь и составляют план улучшений на своём участке",
    audience: [
      { role: "Руководитель производства", painPoint: "Низкая эффективность процессов, высокий процент брака и простоев" },
      { role: "Руководитель смены", painPoint: "Сотрудники нарушают стандарты, нет системы выявления потерь" },
      { role: "Инженер по качеству", painPoint: "Рекламации растут, нет инструментов системного анализа причин" },
      { role: "Специалист по улучшениям", painPoint: "Нужна методологическая база для запуска Lean-трансформации" },
    ],
    results: [
      { value: "7", label: "видов потерь", description: "Участники идентифицируют все виды потерь на своём участке" },
      { value: "−30%", label: "сокращение потерь", description: "Средний эффект от первых улучшений в течение 3 месяцев" },
      { value: "1", label: "план улучшений", description: "Каждый участник уходит с готовым планом действий" },
      { value: "15+", label: "инструментов Lean", description: "Практическое знакомство с ключевыми инструментами" },
    ],
    program: [
      {
        id: "m-01",
        title: "Философия бережливого производства",
        topics: [
          "История Lean: от Toyota Production System до наших дней",
          "Ценность и потери: ключевые понятия",
          "5 принципов бережливого производства",
          "Культура непрерывных улучшений (Кайдзен)",
        ],
      },
      {
        id: "m-02",
        title: "7 видов потерь (Муда)",
        topics: [
          "Перепроизводство, ожидание, транспортировка",
          "Излишняя обработка, запасы, движение, дефекты",
          "8-й вид потерь: нереализованный потенциал сотрудников",
          "Практика: выявление потерь на своём участке (Gemba Walk)",
        ],
      },
      {
        id: "m-03",
        title: "Инструменты Lean: 5S и визуальное управление",
        topics: [
          "Система 5S: сортировка, порядок, чистота, стандартизация, совершенствование",
          "Визуальное управление и информационные доски",
          "Стандартизированная работа",
          "Практика: разработка стандарта 5S для рабочего места",
        ],
      },
      {
        id: "m-04",
        title: "Картирование потока создания ценности (VSM)",
        topics: [
          "Что такое поток создания ценности",
          "Построение карты текущего состояния",
          "Определение узких мест и возможностей для улучшения",
          "Практика: построение VSM реального процесса предприятия",
        ],
      },
      {
        id: "m-05",
        title: "Планирование улучшений",
        topics: [
          "Приоритизация улучшений: матрица «усилия — эффект»",
          "Постановка целей по SMART",
          "Цикл PDCA для управления улучшениями",
          "Составление индивидуального плана улучшений на 3 месяца",
        ],
      },
    ],
    trainer: {
      id: "trainer-01",
      name: "Алексей Петров",
      role: "Старший тренер-консультант, эксперт по Lean",
      photo: "/images/trainers/trainer-01.jpg",
      credentials: [
        "Сертифицированный Lean Six Sigma Black Belt",
        "15+ лет опыта внедрения Lean на производствах",
        "Провёл 200+ тренингов для 50+ предприятий",
      ],
      profileUrl: "/team/trainer-01",
    },
    pricing: {
      price: 180000,
      currency: "₽",
      label: "за группу",
      note: "До 15 участников. При проведении онлайн — 150 000 ₽.",
    },
    faq: [
      {
        question: "Какой формат проведения тренинга?",
        answer:
          "Тренинг проводится в офлайн-формате на площадке вашего предприятия (2 полных дня) или онлайн в Zoom (4 сессии по полдня). Офлайн-формат включает Gemba Walk — практику на реальном производстве.",
      },
      {
        question: "Нужна ли предварительная подготовка участников?",
        answer:
          "Нет, тренинг рассчитан на участников без опыта в Lean. Мы начинаем с основ и постепенно переходим к практическим инструментам. Единственное требование — участники должны работать в производственной или смежной среде.",
      },
      {
        question: "Можно ли адаптировать программу под наше предприятие?",
        answer:
          "Да, перед тренингом мы проводим предварительное интервью с заказчиком и адаптируем примеры, кейсы и практические задания под специфику вашего производства.",
      },
      {
        question: "Что получают участники по итогам?",
        answer:
          "Каждый участник получает: сертификат о прохождении тренинга, рабочую тетрадь с шаблонами инструментов, индивидуальный план улучшений на 3 месяца, доступ к онлайн-библиотеке материалов.",
      },
      {
        question: "Есть ли пост-тренинговое сопровождение?",
        answer:
          "Да, в течение 1 месяца после тренинга участники могут обратиться к тренеру за консультацией по внедрению. Также доступна опция расширенного сопровождения (3 месяца) с ежемесячными онлайн-сессиями.",
      },
    ],
    relatedTrainings: [
      {
        id: "t-02",
        title: "Картирование потока создания ценности (VSM)",
        slug: "kartirovanie-potoka-sozdaniya-tsennosti",
        categoryId: "lean",
        keyResult: "Участники строят карту текущего и целевого состояния реального процесса",
        duration: "2 дня",
        format: ["offline"],
      },
      {
        id: "t-03",
        title: "SMED — быстрая переналадка",
        slug: "smed-bystraya-pereanaladka",
        categoryId: "lean",
        keyResult: "Сокращение времени переналадки на 30–50% на пилотном оборудовании",
        duration: "1 день",
        format: ["offline"],
      },
      {
        id: "t-04",
        title: "Кайдзен-проекты: от идеи до результата",
        slug: "kajdzen-proekty-ot-idei-do-rezultata",
        categoryId: "lean",
        keyResult: "Каждый участник запускает кайдзен-проект с измеримым эффектом на своём участке",
        duration: "2 дня",
        format: ["offline", "online"],
      },
    ],
  },

  // ═══════ t-02: Картирование потока (FULL) ═══════
  {
    id: "t-02",
    title: "Картирование потока создания ценности (VSM)",
    slug: "kartirovanie-potoka-sozdaniya-tsennosti",
    categoryId: "lean",
    categoryName: "Кайдзен и Бережливое производство",
    description:
      "Практический тренинг по анализу и оптимизации потоков создания ценности. Участники научатся строить карту текущего состояния процесса, находить узкие места и проектировать целевое состояние с конкретными улучшениями.",
    duration: "2 дня",
    format: ["offline"],
    level: "managers",
    keyResult: "Участники строят карту текущего и целевого состояния реального процесса",
    audience: [
      { role: "Руководитель производства", painPoint: "Процессы непрозрачны, нет единого видения потока" },
      { role: "Инженер-технолог", painPoint: "Много потерь между переделами, но непонятно, где именно" },
      { role: "Менеджер по качеству", painPoint: "Дефекты возникают на стыках процессов, нужен системный взгляд" },
      { role: "Руководитель проекта улучшений", painPoint: "Нужен инструмент для визуализации и приоритизации изменений" },
    ],
    results: [
      { value: "2", label: "карты VSM", description: "Текущее и целевое состояние реального процесса" },
      { value: "−40%", label: "время протекания", description: "Средний потенциал сокращения Lead Time" },
      { value: "5+", label: "узких мест", description: "Идентификация ключевых ограничений в потоке" },
      { value: "1", label: "план действий", description: "Конкретные шаги по переходу к целевому состоянию" },
    ],
    program: [
      {
        id: "m-01",
        title: "Основы потокового мышления",
        topics: [
          "Что такое поток создания ценности",
          "Разница между ценностью и потерями в потоке",
          "Ключевые метрики: Lead Time, Cycle Time, WIP",
          "Когда и зачем строить VSM",
        ],
      },
      {
        id: "m-02",
        title: "Построение карты текущего состояния",
        topics: [
          "Символика и нотация VSM",
          "Сбор данных на Gemba: хронометраж, интервью",
          "Практика: построение карты текущего состояния",
          "Расчёт показателей эффективности потока",
        ],
      },
      {
        id: "m-03",
        title: "Анализ и проектирование целевого состояния",
        topics: [
          "Выявление узких мест и потерь на карте",
          "Принципы проектирования целевого состояния",
          "Практика: построение карты целевого состояния",
          "Разработка плана перехода с таймлайном",
        ],
      },
    ],
    trainer: {
      id: "trainer-01",
      name: "Алексей Петров",
      role: "Старший тренер-консультант, эксперт по Lean",
      photo: "/images/trainers/trainer-01.jpg",
      credentials: [
        "Сертифицированный Lean Six Sigma Black Belt",
        "15+ лет опыта внедрения Lean на производствах",
        "Провёл 200+ тренингов для 50+ предприятий",
      ],
      profileUrl: "/team/trainer-01",
    },
    pricing: {
      price: 195000,
      currency: "₽",
      label: "за группу",
      note: "До 12 участников. Проводится только в офлайн-формате на площадке предприятия.",
    },
    faq: [
      {
        question: "Нужно ли готовить данные заранее?",
        answer:
          "Да, перед тренингом мы проводим установочную сессию и просим подготовить данные по выбранному процессу: этапы, время операций, объёмы. Это позволяет работать с реальными данными.",
      },
      {
        question: "Какой процесс лучше выбрать для картирования?",
        answer:
          "Рекомендуем выбрать процесс, который: (1) проходит через несколько подразделений, (2) имеет измеримые проблемы (задержки, брак), (3) является приоритетным для улучшения.",
      },
      {
        question: "Можно ли провести онлайн?",
        answer:
          "VSM-тренинг наиболее эффективен в офлайн-формате, так как включает Gemba Walk и работу с физическими материалами. Однако мы можем адаптировать формат для онлайн с использованием Miro.",
      },
    ],
    relatedTrainings: [
      {
        id: "t-01",
        title: "Основы бережливого производства (Lean)",
        slug: "osnovy-berezhlivogo-proizvodstva",
        categoryId: "lean",
        keyResult: "Участники определяют 7 видов потерь и составляют план улучшений на своём участке",
        duration: "2 дня",
        format: ["offline", "online"],
      },
      {
        id: "t-04",
        title: "Кайдзен-проекты: от идеи до результата",
        slug: "kajdzen-proekty-ot-idei-do-rezultata",
        categoryId: "lean",
        keyResult: "Каждый участник запускает кайдзен-проект с измеримым эффектом на своём участке",
        duration: "2 дня",
        format: ["offline", "online"],
      },
    ],
  },

  // ═══════ t-03: SMED (FULL) ═══════
  {
    id: "t-03",
    title: "SMED — быстрая переналадка",
    slug: "smed-bystraya-pereanaladka",
    categoryId: "lean",
    categoryName: "Кайдзен и Бережливое производство",
    description:
      "Методика сокращения времени переналадки оборудования. Участники освоят систему SMED Шигео Шинго и проведут реальную переналадку с хронометражом, разделением внешних и внутренних операций и разработкой нового стандарта.",
    duration: "1 день",
    format: ["offline"],
    level: "line-staff",
    keyResult: "Сокращение времени переналадки на 30–50% на пилотном оборудовании",
    audience: [
      { role: "Оператор оборудования", painPoint: "Переналадка занимает слишком много времени, простои растут" },
      { role: "Наладчик", painPoint: "Нет стандарта переналадки, каждый делает по-своему" },
      { role: "Мастер участка", painPoint: "Из-за долгих переналадок невозможно уменьшить размеры партий" },
      { role: "Инженер по улучшениям", painPoint: "Нужен системный подход к сокращению времени переналадок" },
    ],
    results: [
      { value: "−50%", label: "время переналадки", description: "Средний результат на пилотном оборудовании за 1 день" },
      { value: "4", label: "этапа SMED", description: "Участники владеют полной методикой" },
      { value: "1", label: "новый стандарт", description: "Разработан и протестирован на реальном оборудовании" },
      { value: "0", label: "инвестиций", description: "Первые улучшения без капитальных затрат" },
    ],
    program: [
      {
        id: "m-01",
        title: "Основы SMED",
        topics: [
          "Что такое SMED и зачем сокращать переналадки",
          "4 этапа методики Шигео Шинго",
          "Внутренние и внешние операции: определение и примеры",
          "Видеоанализ переналадки: лучшие практики",
        ],
      },
      {
        id: "m-02",
        title: "Практика на оборудовании",
        topics: [
          "Хронометраж текущей переналадки",
          "Разделение внутренних и внешних операций",
          "Перевод внутренних операций во внешние",
          "Проведение улучшенной переналадки и замер результата",
        ],
      },
      {
        id: "m-03",
        title: "Стандартизация и тиражирование",
        topics: [
          "Разработка нового стандарта переналадки",
          "Визуальные инструкции и чек-листы",
          "План тиражирования на другое оборудование",
          "Система поддержания результатов",
        ],
      },
    ],
    trainer: {
      id: "trainer-02",
      name: "Дмитрий Козлов",
      role: "Тренер-практик, эксперт по производственным системам",
      photo: "/images/trainers/trainer-02.jpg",
      credentials: [
        "10+ лет опыта на производствах (машиностроение, FMCG)",
        "Провёл 80+ проектов по сокращению переналадок",
        "Сертифицированный тренер TWI и SMED",
      ],
      profileUrl: "/team/trainer-02",
    },
    pricing: {
      price: 120000,
      currency: "₽",
      label: "за группу",
      note: "До 10 участников. Проводится на оборудовании заказчика.",
    },
    faq: [
      {
        question: "Подходит ли SMED для нашего оборудования?",
        answer:
          "SMED применим к любому оборудованию с переналадками: станки, линии розлива, экструдеры, прессы и т.д. Перед тренингом мы согласовываем пилотное оборудование.",
      },
      {
        question: "Какой реальный результат можно ожидать?",
        answer:
          "В среднем за 1 день тренинга удаётся сократить время переналадки на 30–50%. Дальнейшие улучшения возможны при внедрении стандартов и доработках.",
      },
    ],
    relatedTrainings: [
      {
        id: "t-01",
        title: "Основы бережливого производства (Lean)",
        slug: "osnovy-berezhlivogo-proizvodstva",
        categoryId: "lean",
        keyResult: "Участники определяют 7 видов потерь и составляют план улучшений на своём участке",
        duration: "2 дня",
        format: ["offline", "online"],
      },
      {
        id: "t-04",
        title: "Кайдзен-проекты: от идеи до результата",
        slug: "kajdzen-proekty-ot-idei-do-rezultata",
        categoryId: "lean",
        keyResult: "Каждый участник запускает кайдзен-проект с измеримым эффектом на своём участке",
        duration: "2 дня",
        format: ["offline", "online"],
      },
    ],
  },

  // ═══════ t-04: Кайдзен-проекты (minimal) ═══════
  {
    id: "t-04",
    title: "Кайдзен-проекты: от идеи до результата",
    slug: "kajdzen-proekty-ot-idei-do-rezultata",
    categoryId: "lean",
    categoryName: getCategoryName("lean"),
    description: "Система непрерывных улучшений через малые проекты",
    duration: "2 дня",
    format: ["offline", "online"],
    level: "all",
    keyResult: "Каждый участник запускает кайдзен-проект с измеримым эффектом на своём участке",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-05: Поведенческий аудит безопасности (minimal) ═══════
  {
    id: "t-05",
    title: "Поведенческий аудит безопасности (BBS)",
    slug: "povedencheskij-audit-bezopasnosti",
    categoryId: "safety",
    categoryName: getCategoryName("safety"),
    description: "Методика наблюдения и коррекции небезопасного поведения на производстве",
    duration: "2 дня",
    format: ["offline"],
    level: "managers",
    keyResult: "Руководители проводят самостоятельные аудиты и дают обратную связь по стандарту",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-06: Культура безопасности (minimal) ═══════
  {
    id: "t-06",
    title: "Культура безопасности: от нуля к системе",
    slug: "kultura-bezopasnosti-ot-nulya-k-sisteme",
    categoryId: "safety",
    categoryName: getCategoryName("safety"),
    description: "Построение системной культуры безопасности от уровня реагирования к проактивному управлению",
    duration: "2 дня",
    format: ["offline", "online"],
    level: "managers",
    keyResult: "Разработан план трансформации культуры безопасности предприятия на 12 месяцев",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-07: TWI (minimal) ═══════
  {
    id: "t-07",
    title: "TWI — обучение на рабочем месте",
    slug: "twi-obuchenie-na-rabochem-meste",
    categoryId: "safety",
    categoryName: getCategoryName("safety"),
    description: "Стандартизированный метод обучения сотрудников безопасным приёмам работы",
    duration: "2 дня",
    format: ["offline"],
    level: "line-staff",
    keyResult: "Наставники владеют 4-шаговым методом TWI и проводят обучение по стандарту",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-08: Расследование инцидентов (minimal) ═══════
  {
    id: "t-08",
    title: "Расследование инцидентов и корневой анализ",
    slug: "rassledovanie-intsidentov",
    categoryId: "safety",
    categoryName: getCategoryName("safety"),
    description:
      "Системный подход к расследованию происшествий и предотвращению повторения. Тренинг охватывает методики 5 Почему, диаграмму Ишикавы и системный анализ коренных причин с практикой на реальных кейсах предприятия",
    duration: "1 день",
    format: ["offline", "online"],
    level: "managers",
    keyResult: "Участники проводят полное расследование инцидента по стандартной методике",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-09: B2B-продажи (minimal) ═══════
  {
    id: "t-09",
    title: "B2B-продажи: от холодного контакта до сделки",
    slug: "b2b-prodazhi-ot-holodnogo-kontakta",
    categoryId: "sales",
    categoryName: getCategoryName("sales"),
    description: "Полный цикл B2B-продаж: поиск клиентов, выход на ЛПР, ведение переговоров, закрытие",
    duration: "2 дня",
    format: ["offline", "online"],
    level: "office",
    keyResult: "Менеджеры увеличивают конверсию из первого контакта в встречу на 25%",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-10: Переговоры по Гарварду (minimal) ═══════
  {
    id: "t-10",
    title: "Переговоры по Гарварду",
    slug: "peregovory-po-garvardu",
    categoryId: "sales",
    categoryName: getCategoryName("sales"),
    description: "Принципиальные переговоры: win-win стратегии для сложных B2B-ситуаций",
    duration: "2 дня",
    format: ["offline"],
    level: "managers",
    keyResult: "Участники владеют техникой BATNA и проводят переговоры без уступок по цене",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-11: Управление ключевыми клиентами (minimal) ═══════
  {
    id: "t-11",
    title: "Управление ключевыми клиентами (KAM)",
    slug: "upravlenie-klyuchevymi-klientami",
    categoryId: "sales",
    categoryName: getCategoryName("sales"),
    description: "Стратегии развития и удержания крупнейших клиентов компании",
    duration: "1 день",
    format: ["offline", "online"],
    level: "managers",
    keyResult: "Составлен план развития top-10 клиентов с конкретными действиями на квартал",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-12: Лидерство на производстве (minimal) ═══════
  {
    id: "t-12",
    title: "Лидерство на производстве",
    slug: "liderstvo-na-proizvodstve",
    categoryId: "leadership",
    categoryName: getCategoryName("leadership"),
    description: "Развитие управленческих навыков для руководителей производственных подразделений",
    duration: "2 дня",
    format: ["offline"],
    level: "managers",
    keyResult: "Руководители внедряют ежедневные управленческие ритуалы на своих участках",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-13: Управление изменениями (minimal) ═══════
  {
    id: "t-13",
    title: "Управление изменениями",
    slug: "upravlenie-izmeneniyami",
    categoryId: "leadership",
    categoryName: getCategoryName("leadership"),
    description: "Как внедрять изменения в организации и преодолевать сопротивление сотрудников",
    duration: "2 дня",
    format: ["offline", "online"],
    level: "managers",
    keyResult: "Разработана дорожная карта изменений с планом коммуникации и управлением рисками",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-14: Развитие управленческой команды (minimal) ═══════
  {
    id: "t-14",
    title: "Развитие управленческой команды",
    slug: "razvitie-upravlencheskoj-komandy",
    categoryId: "leadership",
    categoryName: getCategoryName("leadership"),
    description: "Командная сессия для топ-менеджмента: стратегическое выравнивание и синхронизация",
    duration: "2 дня",
    format: ["offline"],
    level: "managers",
    keyResult: "Команда выравнивает приоритеты и договаривается о правилах взаимодействия",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-15: Наставничество (minimal) ═══════
  {
    id: "t-15",
    title: "Наставничество и развитие подчинённых",
    slug: "nastavnichestvo-i-razvitie-podchinionnykh",
    categoryId: "leadership",
    categoryName: getCategoryName("leadership"),
    description: "Инструменты наставничества, обратной связи и развития сотрудников для руководителей",
    duration: "1 день",
    format: ["offline", "online"],
    level: "managers",
    keyResult: "Руководители проводят развивающие беседы и составляют ИПР для подчинённых",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-16: Тайм-менеджмент (minimal) ═══════
  {
    id: "t-16",
    title: "Тайм-менеджмент и приоритизация",
    slug: "tajm-menedzhment-i-prioritizatsiya",
    categoryId: "personal",
    categoryName: getCategoryName("personal"),
    description: "Практические инструменты управления временем и фокусировки на главном",
    duration: "1 день",
    format: ["offline", "online"],
    level: "all",
    keyResult: "Участники внедряют систему планирования и сокращают потери времени на 20%",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-17: Решение проблем A3 (minimal) ═══════
  {
    id: "t-17",
    title: "Профессиональное решение проблем (A3)",
    slug: "professionalnoe-reshenie-problem-a3",
    categoryId: "personal",
    categoryName: getCategoryName("personal"),
    description: "Структурированный подход к решению сложных производственных и бизнес-задач",
    duration: "2 дня",
    format: ["offline"],
    level: "managers",
    keyResult: "Участники решают реальную проблему предприятия по методике A3 за время тренинга",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-18: Стресс-менеджмент (minimal) ═══════
  {
    id: "t-18",
    title: "Стресс-менеджмент для руководителей",
    slug: "stress-menedzhment-dlya-rukovoditelej",
    categoryId: "personal",
    categoryName: getCategoryName("personal"),
    description: "Управление стрессом и эмоциональной устойчивостью в условиях высокой нагрузки",
    duration: "1 день",
    format: ["online"],
    level: "managers",
    keyResult: "Руководители владеют техниками быстрого восстановления и профилактики выгорания",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-19: Фасилитация совещаний (minimal) ═══════
  {
    id: "t-19",
    title: "Фасилитация совещаний и рабочих сессий",
    slug: "fasilitatsiya-soveshchanij",
    categoryId: "communication",
    categoryName: getCategoryName("communication"),
    description: "Техники проведения результативных совещаний и стратегических сессий",
    duration: "2 дня",
    format: ["offline"],
    level: "managers",
    keyResult: "Участники проводят совещание по стандарту за 30 минут с конкретными решениями",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-20: Эффективные коммуникации (minimal) ═══════
  {
    id: "t-20",
    title: "Эффективные коммуникации в команде",
    slug: "effektivnye-kommunikatsii-v-komande",
    categoryId: "communication",
    categoryName: getCategoryName("communication"),
    description: "Развитие навыков горизонтальной коммуникации и командного взаимодействия",
    duration: "1 день",
    format: ["offline", "online"],
    level: "all",
    keyResult: "Команда договаривается о стандартах коммуникации и снижает конфликтность",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-21: Публичные выступления (minimal) ═══════
  {
    id: "t-21",
    title: "Публичные выступления и презентации",
    slug: "publichnye-vystupleniya-i-prezentatsii",
    categoryId: "communication",
    categoryName: getCategoryName("communication"),
    description: "Подготовка и проведение убедительных презентаций для внутренней и внешней аудитории",
    duration: "2 дня",
    format: ["offline"],
    level: "office",
    keyResult: "Участники готовят и проводят 5-минутную презентацию проекта перед экспертной комиссией",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },

  // ═══════ t-22: Обратная связь (minimal) ═══════
  {
    id: "t-22",
    title: "Обратная связь как инструмент управления",
    slug: "obratnaya-svyaz-kak-instrument-upravleniya",
    categoryId: "communication",
    categoryName: getCategoryName("communication"),
    description: "Модели и техники конструктивной обратной связи для руководителей и HR",
    duration: "1 день",
    format: [],
    level: "managers",
    keyResult: "Руководители дают обратную связь по модели SBI и BOFF в повседневной практике",
    audience: [],
    results: [],
    program: [],
    trainer: defaultTrainer,
    pricing: defaultPricing,
    faq: [],
    relatedTrainings: [],
  },
];

// ─────────────────────────────────────────────
// Helper functions
// ─────────────────────────────────────────────

export function getTrainingBySlug(slug: string): TrainingDetail | undefined {
  return trainings.find((t) => t.slug === slug);
}

export function getTrainingsByCategory(categoryId: string): TrainingDetail[] {
  return trainings.filter((t) => t.categoryId === categoryId);
}

export function getAllCategories(): Category[] {
  return categories;
}
