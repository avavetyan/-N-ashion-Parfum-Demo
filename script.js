document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Target elements to animate
    const animatedElements = document.querySelectorAll('.fade-in-up, .card, .philosophy-content p, .contact-box');

    // Add fade-in-up class to cards and other elements for consistent animation base if not present
    document.querySelectorAll('.card, .philosophy-content p, .contact-box').forEach(el => {
        el.classList.add('fade-in-up');
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Header Background on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 10, 0.8)';
            header.style.padding = '1rem 5%';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.3)';
            header.style.padding = '1.5rem 5%';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Language Switcher Logic
    const translations = {
        en: {
            page_title: "N'ashion | Custom Personality Perfume",
            meta_description: "N'ashion - One bottle, one personality. Creating unique perfumes based on your individual character.",
            nav_philosophy: "Philosophy",
            nav_creation: "The Creation",
            nav_contact: "Contact",
            hero_title: "One Bottle, <br><span class=\"accent-text\">Endless Luxury</span>",
            hero_subtitle: "Tired of identical perfumes? Let's create your unique scent.",
            hero_cta: "Discover Your Scent",
            philosophy_title: "The Philosophy",
            philosophy_text_1: "At N'ashion, we believe that true luxury is individuality. A scent shouldn't just be a smell; it should be an extension of your soul, a whisper of your personality.",
            philosophy_quote: "\"One bottle, one personality.\"",
            philosophy_text_2: "We step away from mass production to craft a fragrance that is exclusively yours.",
            process_title: "The Creation Process",
            process_step_1_title: "The Consultation",
            process_step_1_text: "We begin with a conversation. We explore your character, your memories, and your desires to understand the essence of you.",
            process_step_2_title: "The Composition",
            process_step_2_text: "Our master perfumers select rare notes and accords, blending them into a harmony that resonates with your unique vibration.",
            process_step_3_title: "The Reveal",
            process_step_3_text: "Your signature scent is bottled in our premium glass flacons, ready to become your invisible signature.",
            contact_title: "Begin Your Journey",
            contact_subtitle: "Ready to find the scent that defines you?",
            footer_text: "&copy; 2026 N'ashion Perfume. All Rights Reserved.",
            chat_title: "N'ashion Assistant",
            chat_welcome: "Hello! How can I assist you in finding your perfect scent today?",
            faq_pricing: "What is the pricing?",
            faq_process: "How does it work?",
            faq_shipping: "Do you ship?",
            faq_contact: "Contact a specialist",
            answer_pricing: "Our custom perfumes start at 25,000 AMD for 50ml. Prices may vary based on selected ingredients.",
            answer_process: "The process is simple: Consultation, Composition, and Creation. We work with you every step.",
            answer_shipping: "Yes, we offer free shipping in Yerevan and affordable rates for regions.",
            answer_contact: "You can call us at +374 93 46 64 99 or DM us on Instagram."
        },
        hy: {
            page_title: "N'ashion | Անհատական Օծանելիք",
            meta_description: "N'ashion - Մեկ շիշ, մեկ անհատականություն: Ստեղծում ենք յուրահատուկ օծանելիքներ՝ հիմնված ձեր անհատական բնավորության վրա:",
            nav_philosophy: "Փիլիսոփայություն",
            nav_creation: "Ստեղծման Գործընթացը",
            nav_contact: "Կապ",
            hero_title: "Մեկ Շիշ, <br><span class=\"accent-text\">Անվերջ Շքեղություն</span>",
            hero_subtitle: "Հոգնե՞լ եք նույնանման օծանելիքներից: Եկեք ստեղծենք ձեր յուրահատուկ բույրը:",
            hero_cta: "Բացահայտեք Ձեր Բույրը",
            philosophy_title: "Փիլիսոփայություն",
            philosophy_text_1: "N'ashion-ում մենք հավատում ենք, որ իրական շքեղությունը անհատականությունն է: Բույրը չպետք է ուղղակի հոտ լինի, այն պետք է լինի ձեր հոգու շարունակությունը, ձեր անհատականության շշուկը:",
            philosophy_quote: "«Մեկ շիշ, մեկ անհատականություն»",
            philosophy_text_2: "Մենք հեռանում ենք զանգվածային արտադրությունից՝ ստեղծելու մի բույր, որը բացառապես ձերն է:",
            process_title: "Ստեղծման Գործընթացը",
            process_step_1_title: "Խորհրդատվություն",
            process_step_1_text: "Մենք սկսում ենք զրույցից: Մենք բացահայտում ենք ձեր բնավորությունը, հիշողությունները և ցանկությունները՝ հասկանալու ձեր էությունը:",
            process_step_2_title: "Բաղադրություն",
            process_step_2_text: "Մեր վարպետ պարֆյումերները ընտրում են հազվագյուտ նոտաներ և համադրություններ՝ դրանք միաձուլելով մի հարմոնիայի մեջ, որը համահունչ է ձեր յուրահատուկ ոգուն:",
            process_step_3_title: "Բացահայտում",
            process_step_3_text: "Ձեր յուրահատուկ բույրը լցվում է մեր պրեմիում ապակե սրվակների մեջ՝ պատրաստ դառնալու ձեր անտեսանելի այցեքարտը:",
            contact_title: "Սկսեք Ձեր Ուղին",
            contact_subtitle: "Պատրա՞ստ եք գտնել այն բույրը, որը բնորոշում է ձեզ?",
            footer_text: "&copy; 2026 N'ashion Perfume. Բոլոր իրավունքները պաշտպանված են:",
            chat_title: "N'ashion Օգնական",
            chat_welcome: "Ողջույն: Ինչպե՞ս կարող եմ օգնել ձեզ գտնել ձեր կատարյալ բույրը:",
            faq_pricing: "Ինչպիսի՞ն են գները:",
            faq_process: "Ինչպե՞ս է ընթանում գործընթացը:",
            faq_shipping: "Առաքում ունե՞ք:",
            faq_contact: "Կապվել մասնագետի հետ",
            answer_pricing: "Մեր անհատական օծանելիքների գները սկսվում են 25,000 դրամից՝ 50մլ շշի համար: Գինը կարող է տատանվել կախված ընտրված բաղադրիչներից:",
            answer_process: "Գործընթացը պարզ է՝ խորհրդատվություն, բաղադրատոմսի ստեղծում և պատրաստում: Մենք ձեզ հետ աշխատում ենք յուրաքանչյուր քայլափոխի:",
            answer_shipping: "Այո, մենք իրականացնում ենք անվճար առաքում Երևանում և մատչելի առաքում մարզերում:",
            answer_contact: "Դուք կարող եք զանգահարել մեզ +374 93 46 64 99 համարով կամ գրել Instagram-ին:"
        },
        ru: {
            page_title: "N'ashion | Индивидуальный парфюм",
            meta_description: "N'ashion - Один флакон, одна личность. Создаем уникальные духи, основанные на вашем индивидуальном характере.",
            nav_philosophy: "Философия",
            nav_creation: "Создание",
            nav_contact: "Контакты",
            hero_title: "Один флакон, <br><span class=\"accent-text\">Бесконечная роскошь</span>",
            hero_subtitle: "Устали от одинаковых ароматов? Давайте создадим ваш уникальный парфюм.",
            hero_cta: "Откройте свой аромат",
            philosophy_title: "Философия",
            philosophy_text_1: "В N'ashion мы верим, что истинная роскошь — это индивидуальность. Аромат не должен быть просто запахом; он должен быть продолжением вашей души, шепотом вашей личности.",
            philosophy_quote: "«Один флакон, одна личность, один характер.»",
            philosophy_text_2: "Мы отходим от массового производства, чтобы создать аромат, который будет исключительно вашим.",
            process_title: "Процесс создания",
            process_step_1_title: "Консультация",
            process_step_1_text: "Мы начинаем с разговора. Мы изучаем ваш характер, ваши воспоминания и желания, чтобы понять вашу сущность.",
            process_step_2_title: "Композиция",
            process_step_2_text: "Наши мастера-парфюмеры отбирают редкие ноты и аккорды, смешивая их в гармонию, резонирующую с вашей уникальной вибрацией.",
            process_step_3_title: "Открытие",
            process_step_3_text: "Ваш фирменный аромат разливается в наши премиальные стеклянные флаконы, готовый стать вашей невидимой подписью.",
            contact_title: "Начните свое путешествие",
            contact_subtitle: "Готовы найти аромат, который определяет вас?",
            footer_text: "&copy; 2026 N'ashion Perfume. Все права защищены.",
            chat_title: "Ассистент N'ashion",
            chat_welcome: "Здравствуйте! Как я могу помочь вам найти свой идеальный аромат?",
            faq_pricing: "Каковы цены?",
            faq_process: "Как это работает?",
            faq_shipping: "У вас есть доставка?",
            faq_contact: "Связаться со специалистом",
            answer_pricing: "Цены на наши индивидуальные духи начинаются от 25 000 драм за флакон 50 мл. Цена может варьироваться в зависимости от выбранных ингредиентов.",
            answer_process: "Процесс прост: Консультация, Составление композиции и Создание. Мы работаем с вами на каждом этапе.",
            answer_shipping: "Да, мы предлагаем бесплатную доставку по Еревану и доступные тарифы для регионов.",
            answer_contact: "Вы можете позвонить нам по телефону +374 93 46 64 99 или написать в Instagram."
        }
    };

    // Chat Widget Logic
    const chatWidget = {
        isOpen: false,
        elements: {
            btn: document.getElementById('chat-btn'),
            window: document.getElementById('chat-window'),
            closeBtn: document.getElementById('close-chat'),
            messages: document.getElementById('chat-messages'),
            options: document.getElementById('faq-options'),
            notification: document.querySelector('.notification-dot')
        },
        faqs: {
            en: [
                { id: 'pricing', text: 'What is the pricing?', answerKey: 'answer_pricing' },
                { id: 'process', text: 'How does it work?', answerKey: 'answer_process' },
                { id: 'shipping', text: 'Do you ship?', answerKey: 'answer_shipping' },
                { id: 'contact', text: 'Contact a specialist', answerKey: 'answer_contact' }
            ],
            hy: [
                { id: 'pricing', text: 'Ինչպիսի՞ն են գները:', answerKey: 'answer_pricing' },
                { id: 'process', text: 'Ինչպե՞ս է ընթանում գործընթացը:', answerKey: 'answer_process' },
                { id: 'shipping', text: 'Առաքում ունե՞ք:', answerKey: 'answer_shipping' },
                { id: 'contact', text: 'Կապվել մասնագետի հետ', answerKey: 'answer_contact' }
            ],
            ru: [
                { id: 'pricing', text: 'Каковы цены?', answerKey: 'answer_pricing' },
                { id: 'process', text: 'Как это работает?', answerKey: 'answer_process' },
                { id: 'shipping', text: 'У вас есть доставка?', answerKey: 'answer_shipping' },
                { id: 'contact', text: 'Связаться со специалистом', answerKey: 'answer_contact' }
            ]
        },
        init() {
            this.elements.btn.addEventListener('click', () => this.toggleChat());
            this.elements.closeBtn.addEventListener('click', () => this.toggleChat());

            // Initial FAQ render
            this.renderFAQs(currentLang || 'en');
        },
        toggleChat() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.elements.window.classList.remove('hidden');
                this.elements.notification.style.display = 'none';
            } else {
                this.elements.window.classList.add('hidden');
            }
        },
        addMessage(text, sender = 'bot') {
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('message', sender);
            const p = document.createElement('p');
            p.innerText = text;
            msgDiv.appendChild(p);
            this.elements.messages.appendChild(msgDiv);
            this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
        },
        renderFAQs(lang) {
            this.elements.options.innerHTML = '';
            const faqs = this.faqs[lang];

            faqs.forEach(faq => {
                const btn = document.createElement('button');
                btn.classList.add('faq-btn');
                // Check if we have a translation key for the button text itself or use direct text
                // For simplicity here, relying on re-render when language changes
                btn.innerText = faq.text;
                btn.setAttribute('data-i18n', `faq_${faq.id}`); // Add data-i18n for text updates

                btn.addEventListener('click', () => {
                    this.addMessage(btn.innerText, 'user');
                    // Simulate typing delay
                    setTimeout(() => {
                        const answer = translations[lang][faq.answerKey] || "I'm not sure about that.";
                        this.addMessage(answer, 'bot');
                    }, 500);
                });
                this.elements.options.appendChild(btn);
            });
        },
        updateLanguage(lang) {
            this.renderFAQs(lang);
            // Also clear messages or translate 'Welcome' message?
            // For now, let's just keep history but reset welcome if empty? 
            // Better: update valid data-i18n elements inside chat which we are doing globally.
        }
    };



    const langBtns = document.querySelectorAll('.lang-btn');

    // Check saved language
    const currentLang = localStorage.getItem('nashion_lang') || 'en';
    setLanguage(currentLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.id.split('-')[1];
            setLanguage(lang);
            localStorage.setItem('nashion_lang', lang);
        });
    });

    function setLanguage(lang) {
        // Update document lang
        document.documentElement.lang = lang;

        // Update active button
        langBtns.forEach(btn => {
            if (btn.id === `lang-${lang}`) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'META') {
                    el.setAttribute('content', translations[lang][key]);
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Notify Chat Widget
        chatWidget.updateLanguage(lang);
    }
    chatWidget.init();
});
