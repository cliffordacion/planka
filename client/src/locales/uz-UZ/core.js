import dateFns from 'date-fns/locale/uz';

export default {
  dateFns,

  format: {
    date: 'M/d/yyyy',
    time: 'p',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'MMM d',
    longDateTime: "MMMM d 'at' p",
    fullDate: 'MMM d, y',
    fullDateTime: "MMMM d, y 'at' p",
  },

  translation: {
    common: {
      account: 'Profil',
      actions: 'Amallar',
      addAttachment_title: "Ilova Qo'shish",
      addComment: "Izoh qo'shish",
      addManager_title: "Boshqaruvchi Qo'shish",
      addMember_title: "Yangi a'zo Qo'shish",
      addUser_title: "Foydalanuvchi Qo'shish",
      administrator: 'Administrator',
      all: 'Barchasi',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        "Barcha o'zgarishlar tarmoq ulanishi tiklangandan so'ng<br />avtomatik saqlanadi.",
      areYouSureYouWantToDeleteThisAttachment: "Ushbu biriktirmani o'chirmoqchimisiz?",
      areYouSureYouWantToDeleteThisBoard: "Ushbu doskani o'chirmoqchimisiz?",
      areYouSureYouWantToDeleteThisCard: "Ushbu kartani o'chirmoqchimisiz?",
      areYouSureYouWantToDeleteThisComment: "Ushbu izohni o'chirmoqchimisiz?",
      areYouSureYouWantToDeleteThisLabel: "Ushbu yorliqni o'chirmoqchimisiz?",
      areYouSureYouWantToDeleteThisList: "Ushbu ro'yxatni o'chirmoqchimisiz?",
      areYouSureYouWantToDeleteThisProject: "Ushbu loyihani o'chirmoqchimisiz?",
      areYouSureYouWantToDeleteThisTask: "Ushbu topshiriqni o'chirmoqchimisiz?",
      areYouSureYouWantToDeleteThisUser: "Ushbu foydalanuvchini o'chirmoqchimisiz?",
      areYouSureYouWantToLeaveBoard: 'Ushbu doskadan chiqmoqchimisiz?',
      areYouSureYouWantToLeaveProject: 'Ushbu loyihadan chiqmoqchimisiz?',
      areYouSureYouWantToRemoveThisManagerFromProject:
        "Ushbu boshqaruvchini loyihadan o'chirmoqchimisiz?",
      areYouSureYouWantToRemoveThisMemberFromBoard: "Ushbu a'zoni doskadan o'chirmoqchimisiz?",
      attachment: 'Ilova',
      attachments: 'Ilovalar',
      authentication: 'Autentifikatsiya',
      background: 'Orqa fon',
      board: 'Doska',
      boardNotFound_title: 'Doska Topilmadi',
      cardActions_title: 'Karta Amallari',
      cardNotFound_title: 'Karta Topilmadi',
      cardOrActionAreDeleted: "Karta yoki amal o'chirilgan.",
      color: 'Rang',
      createBoard_title: 'Doska Yaratish',
      createLabel_title: 'Yorliq Yaratish',
      createNewOneOrSelectExistingOne: "Yangisini tanlash yoki<br />mavjud bo'lganini tanlash.",
      createProject_title: 'Loyiha Yaratish',
      createTextFile_title: 'Matnli fayl yaratish',
      currentPassword: 'Hozirgi parol',
      dangerZone_title: 'Xavfli Hudud',
      date: 'Sana',
      dueDate_title: 'Muddati',
      deleteAttachment_title: "Ilovani O'chirish",
      deleteBoard_title: "Doskani O'chirish",
      deleteCard_title: "Kartani O'chirish",
      deleteComment_title: "Izohni O'chirish",
      deleteLabel_title: "Yorliqni O'chirish",
      deleteList_title: "Ro'yxatni O'chirish",
      deleteProject_title: "Loyihani O'chirish",
      deleteTask_title: "Vazifani O'chirish",
      deleteUser_title: "Foydalanuvchini O'chirish",
      description: 'Tavsif',
      dropFileToUpload: 'Faylni yuklash uchun qoldiring',
      editAttachment_title: 'Ilovani Tahrirlash',
      editAvatar_title: 'Avatarni Tahrirlash',
      editBoard_title: 'Doskani Tahrirlash',
      editDueDate_title: 'Muddatni Tahrirlash',
      editEmail_title: 'E-mail ni Tahrirlash',
      editLabel_title: 'Yorliqni Tahrirlash',
      editPassword_title: 'Parolni Tahrirlash',
      editStopwatch_title: 'Taymerni Tahrirlash',
      editUsername_title: 'Foydalanuvchi nomini Tahrirlash',
      email: 'E-mail',
      emailAlreadyInUse: 'E-mail allaqachon mavjud',
      enterCardTitle: 'Karta sarlavhasini kiriting...',
      enterDescription: 'Tavsif kiriting...',
      enterFilename: 'Fayl nomini kiriting',
      enterListTitle: "Ro'yxat sarlavhasini kiriting...",
      enterProjectTitle: 'Loyiha sarlavhasini kiriting',
      enterTaskDescription: 'Topshiriq sarlavhasini kiriting...',
      filterByLabels_title: "Yorliq bo'yicha filter",
      filterByMembers_title: "A'zolar bo'yicha filter",
      fromComputer_title: 'Kompyuterdan',
      general: 'Umumiy',
      hours: 'Soat',
      invalidCurrentPassword: 'Hozirgi parol xato',
      labels: 'Yorliqlar',
      leaveBoard_title: 'Doskadan Chiqish',
      leaveProject_title: 'Loyihadan Chiqish',
      list: "Ro'yxat",
      listActions_title: "R'yxat Amallari",
      managers: 'Boshqaruvchilar',
      members: "A'zolar",
      minutes: 'Minut',
      moveCard_title: "Kartani Ko'chirish",
      name: 'Ism',
      newEmail: 'Yangi e-mail',
      newPassword: 'Yangi parol',
      newUsername: 'Yangi foydalanuvchi nomi',
      noConnectionToServer: "Server bilan bog'lanish yo'q",
      noBoards: "Doskalar yo'q",
      noLists: "Ro'yxatlar yo'q",
      noProjects: "Loyihalar yo'q",
      notifications: 'Bildirishnomalar',
      noUnreadNotifications: "O'qilmagan bildirishnomalar yo'q.",
      openBoard_title: 'Doskani Ochish',
      optional_inline: 'ixtiyoriy',
      organization: 'Tashkilot',
      phone: 'Telefon',
      preferences: 'Afzalliklar',
      pressPasteShortcutToAddAttachmentFromClipboard:
        "Tip: Buferdan ilova qo'shish uchun Ctrl-V (Mac da Cmd-V) ni bosing.",
      project: 'Loyiha',
      projectNotFound_title: 'Loyiha Topilmadi',
      removeManager_title: "Boshqaruvchini O'chirish",
      removeMember_title: "A'zoni O'chirish",
      seconds: 'Sekund',
      selectBoard: 'Doskani tanlash',
      selectList: "Ro'yxatni tanlash",
      selectProject: "Loyihani '",
      settings: 'Sozlamalar',
      stopwatch: 'Taymer',
      subscribeToMyOwnCardsByDefault: "Odatiy holda o'z kartalarimga obuna bo'ling",
      taskActions_title: 'Vazifa Amallari',
      tasks: 'Vazifalar',
      time: 'Vaqt',
      title: 'Sarlavha',
      userActions_title: 'Foydalanuvchi Amallari',
      userAddedThisCardToList: "<1>Ushbu kartani {{list}} ga</1><0>{{user}}</0> qo'shdi",
      userLeftNewCommentToCard: '{{user}} <2>{{card}}</2> ga yangi izoh qoldirdi «{{comment}}»',
      userMovedCardFromListToList:
        "{{user}} <2>{{card}}</2> ni {{fromList}} dan {{toList}} ga ko'chirdi",
      userMovedThisCardFromListToList:
        "<0>{{user}}</0><1> ushbu kartani {{fromList}} dan {{toList}}</1> ga ko'chirdi",
      username: 'Foydalanuvchi nomi',
      usernameAlreadyInUse: 'Foydalanuvchi nomi allaqachon mavjud',
      users: 'Foydalanuvchilar',
      writeComment: 'Izoh yozish...',
    },

    action: {
      addAnotherCard: "Yana karta qo'shish",
      addAnotherList: "Yana ro'yxat qo'shish",
      addAnotherTask: "Yana vazifa qo'shish",
      addCard: "Karta qo'shish",
      addCard_title: "Karta Qo'shish",
      addComment: "Izoh qo'shish",
      addList: "Ro'yxat qo'shish",
      addMoreDetailedDescription: "Batafsil izoh qo'shish",
      addTask: "Vazifa qo'shish",
      addToCard: "Kartaga qo'shish",
      addUser: "Foydalanuvchi qo'shish",
      createBoard: 'Doska yaratish',
      createFile: 'Fayl yaratish',
      createLabel: 'Yorliq yaratish',
      createNewLabel: 'Yangi yorliq yaratish',
      createProject: 'Loyiha yaratish',
      delete: "O'chirish",
      deleteAttachment: "Ilovani o'chirish",
      deleteAvatar: "Avatarni o'chirish",
      deleteBoard: "Doskani o'chirish",
      deleteCard: "Kartani o'chirish",
      deleteCard_title: "Kartani O'chirish",
      deleteComment: "Izohni o'chirish",
      deleteImage: "Rasmni o'chirish",
      deleteLabel: "Yorliqni o'chirish",
      deleteList: "Ro'yxatni o'chirish",
      deleteList_title: "Ro'yxatni O'chirish",
      deleteNotifications: 'Dismiss all',
      deleteProject: "Loyihani o'chirish",
      deleteProject_title: "Loyihani O'chirish",
      deleteTask: "Vazifani o'chirish",
      deleteTask_title: "Vazifani O'chirish",
      deleteUser: "Foydalanuvchini o'chirish",
      edit: 'Tahrirlash',
      editDueDate_title: 'Muddatni Tahrirlash',
      editDescription_title: 'Izohni Tahrirlash',
      editEmail_title: 'E-mailni Tahrirlash',
      editPassword_title: 'Parolni Tahrirlash',
      editStopwatch_title: 'Taymerni Tahrirlash',
      editTitle_title: 'Sarlavhani Tahrirlash',
      editUsername_title: 'Foydalanuvchi nomini Tahrirlash',
      leaveBoard: 'Doskadan chiqish',
      leaveProject: 'Loyidan chiqish',
      logOut_title: 'Chiqish',
      makeCover_title: 'Muqova Yasash',
      move: "Ko'chirish",
      moveCard_title: "Kartani Ko'chirish",
      remove: "O'chirish",
      removeBackground: "Orqa fonni o'chirish",
      removeCover_title: "Muqovani O'chirish",
      removeFromBoard: "Doskadan o'chirish",
      removeFromProject: "Loyihadan o'chirish",
      removeManager: "Boshqaruvchini o'chirish",
      removeMember: "A'zoni o'chirish",
      save: 'Saqlash',
      showAllAttachments: "Barcha ilovalarni ko'rsatish ({{hidden}} yashirilgan)",
      showFewerAttachments: "Kamroq ilovalarni ko'rsatish",
      start: 'Boshlash',
      stop: "To'xtatish",
      subscribe: "Obuna bo'lish",
      unsubscribe: 'Obunani bekor qilish',
      uploadNewAvatar: 'Yangi avatar yuklash',
      uploadNewImage: 'Yangi rasm yuklash',
    },
  },
};
