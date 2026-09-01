export type OptionItem = { value: string; label: string };

export const CAREERS_COPY = {
  en: {
    meta: {
      title: 'Careers | King Banh Mi',
      description:
        'Join the King Banh Mi talent pool. Submit your application and we will reach out when a role that fits your background opens up.',
    },
    langSwitcher: {
      label: 'Language',
      en: 'English',
      es: 'Español',
    },
    hero: {
      titleLine1: 'JOIN THE',
      titleLine2: 'KING BANH MI TEAM',
      subtitle:
        "We're always looking for great people. Send us your application today and we'll reach out when a role that fits opens up.",
      cta: 'APPLY NOW',
      bullet1: 'Open Talent Pool',
      bullet2: 'Hands-on Training',
      bullet3: 'Room to Grow',
      imageAlt: 'Join the King Banh Mi team',
    },
    benefits: {
      heading: 'WHY WORK WITH US',
      intro:
        "Join a brand rooted in authentic Vietnamese flavors. Submit your application to our talent pool and we'll reach out when a fitting role opens.",
      items: [
        {
          title: 'Friendly Team Culture',
          description:
            'Work alongside a supportive crew that celebrates Vietnamese hospitality and looks out for one another.',
        },
        {
          title: 'Hands-on Training',
          description:
            'Learn our recipes, beverage program, and service standards with structured on-the-job coaching.',
        },
        {
          title: 'Growth Opportunities',
          description:
            'Clear paths from crew to shift lead and store management for team members ready to step up.',
        },
        {
          title: 'Competitive Benefits',
          description:
            'Competitive pay based on experience, flexible scheduling where possible, and a respectful workplace.',
        },
      ],
    },
    form: {
      heading: 'APPLICATION FORM',
      intro:
        "Join the King Banh Mi talent pool. We'll reach out when a role that fits your background opens up.",
      sections: {
        personal: 'A. Personal Information',
        rolePreferences: 'B. Role Preferences',
        experienceEducation: 'C. Experience & Education',
        additional: 'D. Additional Information',
      },
      labels: {
        fullName: 'Full Name',
        dateOfBirth: 'Date of Birth',
        gender: 'Gender',
        phone: 'Phone Number',
        email: 'Email',
        address: 'Current Address',
        interestedPosition: 'Area of Interest',
        interestedPositionOther: 'Preferred Role',
        preferredBranch: 'Preferred Location / Branch',
        employmentType: 'Employment Type',
        expectedSalary: 'Expected Salary',
        availableStartDate: 'Earliest Start Date',
        education: 'Education Level',
        yearsOfExperience: 'Years of Experience',
        lastWorkplace: 'Most Recent Employer & Position',
        experienceDescription: 'Tell us about yourself and any relevant experience',
        canWorkNightsWeekends: 'Available for evening / weekend shifts?',
        hasFnBExperience: 'Previous F&B experience?',
        hearAboutUs: 'How did you hear about us?',
        cv: 'Upload CV / Resume',
        notes: 'Additional Notes',
        privacyConsent:
          'I agree to allow King Banh Mi to store my personal information for recruitment purposes.',
      },
      placeholders: {
        fullName: 'John Doe',
        phone: '(657) 400-9122',
        email: 'you@email.com',
        address: 'City, State',
        interestedPosition: 'Select an area of interest',
        interestedPositionOther: "Tell us the role you're interested in",
        preferredBranch: 'Select a location / branch',
        expectedSalary: 'e.g. $20 / hour',
        education: 'Select education level',
        lastWorkplace: 'Company name — role',
        experienceDescription: 'Share a short introduction and any relevant experience...',
        hearAboutUs: 'Select a source',
        notes: "Anything else you'd like us to know...",
      },
      options: {
        genderMale: 'Male',
        genderFemale: 'Female',
        genderOther: 'Other',
        employmentFullTime: 'Full-time',
        employmentPartTime: 'Part-time',
        employmentInternship: 'Internship',
        experienceNone: 'None',
        experienceLessThanOne: 'Less than 1 year',
        experienceOneToThree: '1-3 years',
        experienceMoreThanThree: 'More than 3 years',
        yes: 'Yes',
        no: 'No',
        positionSalesAssociate: 'Sales Associate',
        positionKitchenStaff: 'Kitchen Staff / Chef',
        positionCashier: 'Cashier',
        positionShiftSupervisor: 'Shift Supervisor / Store Manager',
        positionDeliveryDriver: 'Delivery Driver',
        positionMarketing: 'Marketing / Content',
        positionAccounting: 'Accounting',
        positionHumanResources: 'Human Resources',
        positionOther: 'Other',
        branchWestminster: 'Westminster, CA (Bolsa Ave)',
        branchOtherFlexible: 'Other / Flexible',
        educationHighSchool: 'High School',
        educationAssociate: 'Associate / Vocational',
        educationBachelor: "Bachelor's Degree",
        educationGraduate: 'Graduate Degree',
        educationOther: 'Other',
        hearFacebook: 'Facebook',
        hearWebsite: 'Website',
        hearReferral: 'Referral from a friend',
        hearInStore: 'In-store',
        hearOther: 'Other',
      },
      cvHint: 'Optional but encouraged — PDF, DOC, or DOCX up to 5MB',
      removeCvAria: 'Remove CV file',
      submit: 'SUBMIT APPLICATION',
      submitting: 'SUBMITTING...',
      thankYouTitle: 'Thank You!',
      thankYouMessage:
        "Thanks for applying! Your application has been received. We'll be in touch as soon as a suitable role opens up.",
      submitError:
        'There was an error submitting your application. Please try again later.',
      errors: {
        fullName: 'Please enter your full name.',
        dateOfBirth: 'Please select your date of birth.',
        gender: 'Please select your gender.',
        phone: 'Please enter your phone number.',
        email: 'Please enter your email.',
        emailInvalid: 'Please enter a valid email address.',
        address: 'Please enter your current address.',
        interestedPosition: 'Please select an area of interest.',
        interestedPositionOther: 'Please enter your preferred role.',
        preferredBranch: 'Please select a preferred location / branch.',
        employmentType: 'Please select an employment type.',
        availableStartDate: 'Please select your earliest start date.',
        education: 'Please select your education level.',
        yearsOfExperience: 'Please select your years of experience.',
        canWorkNightsWeekends: 'Please indicate evening / weekend availability.',
        hasFnBExperience: 'Please indicate whether you have F&B experience.',
        hearAboutUs: 'Please tell us how you heard about us.',
        privacyConsent: 'Please agree so we can store your information for recruitment.',
        cvInvalidType: 'Only .pdf, .doc, or .docx files are accepted.',
        cvTooLarge: 'CV file must be 5MB or smaller.',
        cvReadFailed: 'Unable to read the CV file.',
      },
    },
  },
  es: {
    meta: {
      title: 'Empleo | King Banh Mi',
      description:
        'Únase al banco de talento de King Banh Mi. Envíe su solicitud y nos pondremos en contacto cuando se abra un puesto acorde a su perfil.',
    },
    langSwitcher: {
      label: 'Idioma',
      en: 'English',
      es: 'Español',
    },
    hero: {
      titleLine1: 'ÚNASE AL',
      titleLine2: 'EQUIPO DE KING BANH MI',
      subtitle:
        'Siempre buscamos personas excepcionales. Envíenos su solicitud hoy y nos pondremos en contacto cuando se abra un puesto acorde a su perfil.',
      cta: 'SOLICITAR AHORA',
      bullet1: 'Banco de talento abierto',
      bullet2: 'Capacitación práctica',
      bullet3: 'Espacio para crecer',
      imageAlt: 'Únase al equipo de King Banh Mi',
    },
    benefits: {
      heading: 'POR QUÉ TRABAJAR CON NOSOTROS',
      intro:
        'Únase a una marca arraigada en auténticos sabores vietnamitas. Envíe su solicitud a nuestro banco de talento y nos pondremos en contacto cuando se abra un puesto adecuado.',
      items: [
        {
          title: 'Cultura de equipo amigable',
          description:
            'Trabaje junto a un equipo solidario que celebra la hospitalidad vietnamita y se apoya mutuamente.',
        },
        {
          title: 'Capacitación práctica',
          description:
            'Aprenda nuestras recetas, programa de bebidas y estándares de servicio con entrenamiento estructurado en el puesto.',
        },
        {
          title: 'Oportunidades de crecimiento',
          description:
            'Rutas claras desde el equipo operativo hasta líder de turno y gerencia de tienda para quienes estén listos para avanzar.',
        },
        {
          title: 'Beneficios competitivos',
          description:
            'Salario competitivo según experiencia, horarios flexibles cuando sea posible y un entorno de trabajo respetuoso.',
        },
      ],
    },
    form: {
      heading: 'FORMULARIO DE SOLICITUD',
      intro:
        'Únase al banco de talento de King Banh Mi. Nos pondremos en contacto cuando se abra un puesto acorde a su perfil.',
      sections: {
        personal: 'A. Información personal',
        rolePreferences: 'B. Preferencias de puesto',
        experienceEducation: 'C. Experiencia y educación',
        additional: 'D. Información adicional',
      },
      labels: {
        fullName: 'Nombre completo',
        dateOfBirth: 'Fecha de nacimiento',
        gender: 'Género',
        phone: 'Número de teléfono',
        email: 'Correo electrónico',
        address: 'Dirección actual',
        interestedPosition: 'Área de interés',
        interestedPositionOther: 'Puesto preferido',
        preferredBranch: 'Ubicación / sucursal preferida',
        employmentType: 'Tipo de empleo',
        expectedSalary: 'Salario esperado',
        availableStartDate: 'Fecha de inicio más temprana',
        education: 'Nivel educativo',
        yearsOfExperience: 'Años de experiencia',
        lastWorkplace: 'Empleador y puesto más reciente',
        experienceDescription: 'Cuéntenos sobre usted y cualquier experiencia relevante',
        canWorkNightsWeekends: '¿Disponible para turnos nocturnos / fines de semana?',
        hasFnBExperience: '¿Experiencia previa en alimentos y bebidas?',
        hearAboutUs: '¿Cómo se enteró de nosotros?',
        cv: 'Subir CV / currículum',
        notes: 'Notas adicionales',
        privacyConsent:
          'Acepto que King Banh Mi almacene mi información personal con fines de reclutamiento.',
      },
      placeholders: {
        fullName: 'Juan Pérez',
        phone: '(657) 400-9122',
        email: 'usted@correo.com',
        address: 'Ciudad, Estado',
        interestedPosition: 'Seleccione un área de interés',
        interestedPositionOther: 'Indíquenos el puesto que le interesa',
        preferredBranch: 'Seleccione una ubicación / sucursal',
        expectedSalary: 'p. ej., $20 / hora',
        education: 'Seleccione nivel educativo',
        lastWorkplace: 'Nombre de la empresa — puesto',
        experienceDescription: 'Comparta una breve presentación y cualquier experiencia relevante...',
        hearAboutUs: 'Seleccione una fuente',
        notes: 'Cualquier otra información que desee compartir...',
      },
      options: {
        genderMale: 'Masculino',
        genderFemale: 'Femenino',
        genderOther: 'Otro',
        employmentFullTime: 'Tiempo completo',
        employmentPartTime: 'Medio tiempo',
        employmentInternship: 'Prácticas',
        experienceNone: 'Ninguna',
        experienceLessThanOne: 'Menos de 1 año',
        experienceOneToThree: '1-3 años',
        experienceMoreThanThree: 'Más de 3 años',
        yes: 'Sí',
        no: 'No',
        positionSalesAssociate: 'Asociado de ventas',
        positionKitchenStaff: 'Personal de cocina / chef',
        positionCashier: 'Cajero/a',
        positionShiftSupervisor: 'Supervisor(a) de turno / gerente de tienda',
        positionDeliveryDriver: 'Repartidor(a)',
        positionMarketing: 'Marketing / contenido',
        positionAccounting: 'Contabilidad',
        positionHumanResources: 'Recursos humanos',
        positionOther: 'Otro',
        branchWestminster: 'Westminster, CA (Bolsa Ave)',
        branchOtherFlexible: 'Otra / Flexible',
        educationHighSchool: 'Preparatoria / bachillerato',
        educationAssociate: 'Título técnico / vocacional',
        educationBachelor: 'Licenciatura',
        educationGraduate: 'Posgrado',
        educationOther: 'Otro',
        hearFacebook: 'Facebook',
        hearWebsite: 'Sitio web',
        hearReferral: 'Referido de un amigo',
        hearInStore: 'En tienda',
        hearOther: 'Otro',
      },
      cvHint: 'Opcional pero recomendado — PDF, DOC o DOCX hasta 5 MB',
      removeCvAria: 'Eliminar archivo de CV',
      submit: 'ENVIAR SOLICITUD',
      submitting: 'ENVIANDO...',
      thankYouTitle: '¡Gracias!',
      thankYouMessage:
        'Gracias por su solicitud. Hemos recibido su información y nos pondremos en contacto cuando se abra un puesto adecuado.',
      submitError:
        'Hubo un error al enviar su solicitud. Por favor, inténtelo de nuevo más tarde.',
      errors: {
        fullName: 'Por favor, ingrese su nombre completo.',
        dateOfBirth: 'Por favor, seleccione su fecha de nacimiento.',
        gender: 'Por favor, seleccione su género.',
        phone: 'Por favor, ingrese su número de teléfono.',
        email: 'Por favor, ingrese su correo electrónico.',
        emailInvalid: 'Por favor, ingrese un correo electrónico válido.',
        address: 'Por favor, ingrese su dirección actual.',
        interestedPosition: 'Por favor, seleccione un área de interés.',
        interestedPositionOther: 'Por favor, ingrese su puesto preferido.',
        preferredBranch: 'Por favor, seleccione una ubicación / sucursal preferida.',
        employmentType: 'Por favor, seleccione un tipo de empleo.',
        availableStartDate: 'Por favor, seleccione su fecha de inicio más temprana.',
        education: 'Por favor, seleccione su nivel educativo.',
        yearsOfExperience: 'Por favor, seleccione sus años de experiencia.',
        canWorkNightsWeekends: 'Por favor, indique su disponibilidad nocturna / fines de semana.',
        hasFnBExperience:
          'Por favor, indique si tiene experiencia en alimentos y bebidas.',
        hearAboutUs: 'Por favor, indíquenos cómo se enteró de nosotros.',
        privacyConsent:
          'Por favor, acepte para que podamos almacenar su información con fines de reclutamiento.',
        cvInvalidType: 'Solo se aceptan archivos .pdf, .doc o .docx.',
        cvTooLarge: 'El archivo de CV debe ser de 5 MB o menos.',
        cvReadFailed: 'No se pudo leer el archivo de CV.',
      },
    },
  },
} as const;

export type CareerLang = keyof typeof CAREERS_COPY;
export type CareersCopy = (typeof CAREERS_COPY)[CareerLang];

export function getGenderOptions(t: CareersCopy): OptionItem[] {
  return [
    { value: 'Male', label: t.form.options.genderMale },
    { value: 'Female', label: t.form.options.genderFemale },
    { value: 'Other', label: t.form.options.genderOther },
  ];
}

export function getEmploymentTypeOptions(t: CareersCopy): OptionItem[] {
  return [
    { value: 'Full-time', label: t.form.options.employmentFullTime },
    { value: 'Part-time', label: t.form.options.employmentPartTime },
    { value: 'Internship', label: t.form.options.employmentInternship },
  ];
}

export function getExperienceYearOptions(t: CareersCopy): OptionItem[] {
  return [
    { value: 'None', label: t.form.options.experienceNone },
    { value: 'Less than 1 year', label: t.form.options.experienceLessThanOne },
    { value: '1-3 years', label: t.form.options.experienceOneToThree },
    { value: 'More than 3 years', label: t.form.options.experienceMoreThanThree },
  ];
}

export function getYesNoOptions(t: CareersCopy): OptionItem[] {
  return [
    { value: 'Yes', label: t.form.options.yes },
    { value: 'No', label: t.form.options.no },
  ];
}

export function getPositionOptions(t: CareersCopy): OptionItem[] {
  return [
    { value: 'Sales Associate', label: t.form.options.positionSalesAssociate },
    { value: 'Kitchen Staff / Chef', label: t.form.options.positionKitchenStaff },
    { value: 'Cashier', label: t.form.options.positionCashier },
    {
      value: 'Shift Supervisor / Store Manager',
      label: t.form.options.positionShiftSupervisor,
    },
    { value: 'Delivery Driver', label: t.form.options.positionDeliveryDriver },
    { value: 'Marketing / Content', label: t.form.options.positionMarketing },
    { value: 'Accounting', label: t.form.options.positionAccounting },
    { value: 'Human Resources', label: t.form.options.positionHumanResources },
    { value: 'Other', label: t.form.options.positionOther },
  ];
}

export function getBranchOptions(t: CareersCopy): OptionItem[] {
  return [
    { value: 'Westminster, CA (Bolsa Ave)', label: t.form.options.branchWestminster },
    { value: 'Other / Flexible', label: t.form.options.branchOtherFlexible },
  ];
}

export function getEducationOptions(t: CareersCopy): OptionItem[] {
  return [
    { value: 'High School', label: t.form.options.educationHighSchool },
    { value: 'Associate / Vocational', label: t.form.options.educationAssociate },
    { value: "Bachelor's Degree", label: t.form.options.educationBachelor },
    { value: 'Graduate Degree', label: t.form.options.educationGraduate },
    { value: 'Other', label: t.form.options.educationOther },
  ];
}

export function getHearAboutOptions(t: CareersCopy): OptionItem[] {
  return [
    { value: 'Facebook', label: t.form.options.hearFacebook },
    { value: 'Website', label: t.form.options.hearWebsite },
    { value: 'Referral from a friend', label: t.form.options.hearReferral },
    { value: 'In-store', label: t.form.options.hearInStore },
    { value: 'Other', label: t.form.options.hearOther },
  ];
}
