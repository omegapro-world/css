(function($){'use strict';var locales={'ru':{name:'русский',points:{LOGIN_TO_SYSTEM:'Вход в систему',YOUR_LANGUAGE:'Ваш язык:',EMAIL_OR_PHONE:'E-Mail или телефон:',EMAIL_OR_PHONE_FOR_EXAMPLE:'(например: +7 903 999-66-77)',PASSWORD:'Пароль:',LOGIN:'Войти',GET_NEW_PASSWORD:'Получить новый пароль?',GET_NEW_PASSWORD_DESCRIPTION:'Это, если старый потеряли или если первый раз в ЛК входите',GET_NEW_PASSWORD_BY_CODE:'Получить новый пароль по коду из письма',REGISTRATION_IN_MMM:'Регистрация в системе МММ',ADDITION_AUTH:'Дополнительная авторизация',ADD_SECURITY_CHECKS:'Подтверждение безопасности. Выберите один из вариантов:',SMS_CODES_TABLE:'Таблица СМС кодов',GA_KEY_DESCRIPTION:'Ключ ГА <a href="http://sergeymavrodi.com/news/19623-instruktsiya_dopolnitelnie_vozmozhnosti_avtorizatsii_v.html" target="_blank">Инструкция тут!</a>',VOICE_CALL:'Голосовое подтверждение',CANCEL:'Отмена',NEXT:'Далее',LOGIN_BY_GA:'Вход по коду ГА',ENTER_GA_KEY:'Введите код ГА:',BACK:'Назад',LOGIN_BY_SMS_CODES_TABLE:'Вход по таблице кодов',ENTER_CODE_N:'Введите код №',GET_NEW_SMS_CODES_TABLE:'Если у Вас нет данного СМС сообщения, закажите новую таблицу кодов',ALL_CODES_USED:'У Вас нет неиспользованной карточки кодов, пожауйста, закажите новую',SMS_CODES_TABLE_INSTRUCTION:'<a href="http://sergey-mavrodi-mmm.net/news/33330-izmeneniya_na_stranitse_avtorizatsii_lk.html" target="_blank">Инструкция по таблице кодов</a>',GET_SMS_CODES_TABLE:'Получить таблицу кодов',LOGIN_BY_VOICE_CALL:'Вход по голосовому подтвердждению',GET_NEW_CAPTCHA:'Новый код',ENTER_CAPTCHA_CODE:'Для продолжения введите код с картинки:',VOICE_CALL_DESCRIPTION:'Через 30 секунд будет инициирован голосовой вызов на ваш телефон. Введите названный Вам код:',GET_CODES_TABLE:'Получение таблицы кодов',GET_CODES_TABLE_BUTTON:'Получить таблицу кодов',PASSWORD_RECOVERY:'Восстановление пароля',EMAIL_OR_PHONE_EXAMPLE:'E-Mail или сотовый телефон:<br/><em style="font-size: 0.7em;">(например: +7 903 999-66-77)</em>',SEND_REQUEST:'Отправить запрос',WARNING:'ВНИМАНИЕ!',DO_NOT_SHOW_AGAIN:'Больше не показывать:',CHANGE_PASSWORD:'Смена пароля',CHANGE_PASSWORD_BUTTON:'Сменить пароль',RECOVERY_CODE:'Код восстановления:',NEW_PASSWORD:'Новый пароль:',REPEAT_NEW_PASSWORD:'Повторите новый пароль:',TOO_SHORT:'Сильно короткий',SIMPLE:'Простой',GOOD:'Хороший',VERY_GOOD:'Очень хороший',SAME_AS_USERNAME:'Совпадает с именем пользователя',NO_PERMISSIONS:'У вас не хватает прав доступа, пожалуйста, обратитесь в службу поддержки',IE_NOT_SUPPORT:"<br /><br /><strong>Система не поддерживает браузер Internet Explorer старше девятой версии!</strong><br /><br /><br />Для пользования системой рекомендуем использовать <a href='http://fx.yandex.ru'>Firefox</a>, либо обновить <a href='http://ie.yandex.ru/'>Internet&nbsp;Explorer</a>",SEND_CODE:'На Ваш номер: %number выслан код подтверждения входа',VOICE_CODE:'На Ваш номер: %number сделан звонок, будьте внимательны, Вам продиктуют код',PASSWORD_TOO_SHORT:'Пароль не может быть короче 6 символов',PASSWORDS_NOT_MATCH:'Введенные пароли не совпадают',PASSWORD_TOO_SIMPLY:'Ваш пароль слишком простой',PHONE_NUMBER:'Номер телефона',INVALID_CAPCHA:'Неверно указан код подтверждения',SYSTEM_ERROR:'Системная ошибка, попробуйте обновить страницу (Ctrl+r или Ctrl+F5)',ALERT:'Внимание'}},'en':{name:'english',points:{LOGIN_TO_SYSTEM:'Login to system',YOUR_LANGUAGE:'Your language:',EMAIL_OR_PHONE:'E-Mail or phone number:',EMAIL_OR_PHONE_FOR_EXAMPLE:'(for example: +7 903 999-66-77)',PASSWORD:'Password:',LOGIN:'Login',GET_NEW_PASSWORD:'Get a new password?',GET_NEW_PASSWORD_DESCRIPTION:'If you have forgotten your old password or login to PO first time',GET_NEW_PASSWORD_BY_CODE:'Get a new password by email',REGISTRATION_IN_MMM:'Registration in МММ System',ADDITION_AUTH:'Additional authorization',ADD_SECURITY_CHECKS:'Securuty verification. Select one option:',SMS_CODES_TABLE:'SMS codes table',GA_KEY_DESCRIPTION:'GA key <a href="http://sergeymavrodi.com/news/19623-instruktsiya_dopolnitelnie_vozmozhnosti_avtorizatsii_v.html" target="_blank">Instruction here!</a>',VOICE_CALL:'Voice call',CANCEL:'Cancel',NEXT:'Next',LOGIN_BY_GA:'Login by GA code',ENTER_GA_KEY:'Enter GA code:',BACK:'Back',LOGIN_BY_SMS_CODES_TABLE:'Login by sms code table',ENTER_CODE_N:'Enter code №',GET_NEW_SMS_CODES_TABLE:'If you haven\'t recieved this message, get a new code table',ALL_CODES_USED:'All codes have been used, get a new code card',SMS_CODES_TABLE_INSTRUCTION:'<a href="http://sergey-mavrodi-mmm.net/news/33330-izmeneniya_na_stranitse_avtorizatsii_lk.html" target="_blank">Code Table Instruction</a>',GET_SMS_CODES_TABLE:'Get SMS Code Table',LOGIN_BY_VOICE_CALL:'Login by voice call',GET_NEW_CAPTCHA:'New code',ENTER_CAPTCHA_CODE:'Type the code shown:',VOICE_CALL_DESCRIPTION:'In 30 seconds you will get a voice call on your phone. Enter the code you hear:',GET_CODES_TABLE:'Get code table',GET_CODES_TABLE_BUTTON:'Get code table',PASSWORD_RECOVERY:'Password recovery',EMAIL_OR_PHONE_EXAMPLE:'E-Mail or mobile phone:<br/><em style="font-size: 0.7em;">(for example: +7 903 999-66-77)</em>',SEND_REQUEST:'Send a request',WARNING:'Attention!',DO_NOT_SHOW_AGAIN:'Don\'t show again:',CHANGE_PASSWORD:'Change password',CHANGE_PASSWORD_BUTTON:'Change password',RECOVERY_CODE:'Recovery code:',NEW_PASSWORD:'New password:',REPEAT_NEW_PASSWORD:'Repeat new password:',TOO_SHORT:'Too short',SIMPLE:'Simple',GOOD:'Good',VERY_GOOD:'Very good',SAME_AS_USERNAME:'Password is the same as user\'s name',NO_PERMISSIONS:'You don\'t have permissions to access, please contact support',IE_NOT_SUPPORT:"<br /><br /><strong>Your browser is not supported. A minimum of Internet Explorer 9 is required!</strong><br /><br /><br />For the work with the system, we recommend using<a href='http://fx.yandex.ru'>Firefox</a>, либо обновить <a href='http://ie.yandex.ru/'>Internet&nbsp;Explorer</a>",SEND_CODE:'A confirmation code will be sent to you phone: %number',VOICE_CODE:'You will get a voice call on your phone: %number, be attentive, you will hear a code',PASSWORD_TOO_SHORT:'Password can\'t be shorter than 6 characters',PASSWORDS_NOT_MATCH:'Passwords do not match',PASSWORD_TOO_SIMPLY:'Your password is too simple',PHONE_NUMBER:'Phone number',INVALID_CAPCHA:'The number you entered is not valid',SYSTEM_ERROR:'System Error, refresh the page (Ctrl+r или Ctrl+F5)',ALERT:'Attention'}},'es':{name:'español',points:{LOGIN_TO_SYSTEM:'Entrar en el sistema',YOUR_LANGUAGE:'Idioma:',EMAIL_OR_PHONE:'Correo electrónico o móvil:',EMAIL_OR_PHONE_FOR_EXAMPLE:'(Por ejemplo: +51976864403)',PASSWORD:'Contraseña:',LOGIN:'Entrar',GET_NEW_PASSWORD:'¿Solicitar nueva contraseña?',GET_NEW_PASSWORD_DESCRIPTION:'En caso de haber perdido su contraseña o si entra en el Área Personal por primera vez',GET_NEW_PASSWORD_BY_CODE:'Recibir nueva contraseña por el código de la carta',REGISTRATION_IN_MMM:'Registro en el sistema de MMM',ADDITION_AUTH:'Autorización adicional',ADD_SECURITY_CHECKS:'Confirmación de seguridad. Elija una de las opciones:',SMS_CODES_TABLE:'El cuadro con los códigos SMS',GA_KEY_DESCRIPTION:'Clave GA <a href="http://sergeymavrodi.com/news/19623-instruktsiya_dopolnitelnie_vozmozhnosti_avtorizatsii_v.html" target="_blank">?Instrucción  está aquí!</a>',VOICE_CALL:'Confirmación de voz',CANCEL:'Cancelar',NEXT:'Seguir',LOGIN_BY_GA:'Entrar con la clave GA',ENTER_GA_KEY:'Introduzca la clave GA:',BACK:'Volver',LOGIN_BY_SMS_CODES_TABLE:'entrar según el cuadro de códigos',ENTER_CODE_N:'introducir el código',GET_NEW_SMS_CODES_TABLE:'si no tiene este mensaje, solicite otro cuadro de códigos',ALL_CODES_USED:'” no tiene tarjeta no utilizada de códigos. Por favor solicite la otra.',SMS_CODES_TABLE_INSTRUCTION:'<a href="http://sergey-mavrodi-mmm.net/news/33330-izmeneniya_na_stranitse_avtorizatsii_lk.html" target="_blank">»instrucción según el cuadro de códigos </a>',GET_SMS_CODES_TABLE:'recibir el cuadro de códigos',LOGIN_BY_VOICE_CALL:'entrar a través de la confirmación',GET_NEW_CAPTCHA:'Nuevo código',ENTER_CAPTCHA_CODE:'Para continuar introduzca el código de la imagen:',VOICE_CALL_DESCRIPTION:'Dentro de 30 segundos recibirá la llamada a su móvil. Introduzca el código que va a escuchar:',GET_CODES_TABLE:'recepción del cuadro de códigos',GET_CODES_TABLE_BUTTON:'recibir el cuadro de códigos',PASSWORD_RECOVERY:'recuperación de la contraseña',EMAIL_OR_PHONE_EXAMPLE:'Correo electrónico o móvil:<br/><em style="font-size: 0.7em;">(por ejemplo: +51976864403)</em>',SEND_REQUEST:'mandar la solicitud',WARNING:'Advertencia!',DO_NOT_SHOW_AGAIN:'No mostrar nunca más:',CHANGE_PASSWORD:'Cambiar la contraseña',CHANGE_PASSWORD_BUTTON:'Cambiar la contraseña',RECOVERY_CODE:' Código de recuperación:',NEW_PASSWORD:'Nuevo código:',REPEAT_NEW_PASSWORD:'confirme el código nuevo:',TOO_SHORT:'Demasiado corto',SIMPLE:'simple',GOOD:'bueno',VERY_GOOD:'muy bueno',SAME_AS_USERNAME:'coincide con el nombre del usuario',NO_PERMISSIONS:'” no posee de bastantes derechos de acceso. Por favor póngase en contacto con el servicio de apoyo',IE_NOT_SUPPORT:"<br /><br /><strong>—El sistema no soporta el navegador Internet Explorer de las versiones posteriores a la novena!</strong><br /><br /><br />durante el trabajo en el sistema aconsejamos utilizar <a href='http://fx.yandex.ru'>Firefox</a>, o actualizar <a href='http://ie.yandex.ru/'>Internet&nbsp;Explorer</a>",SEND_CODE:'El código de confirmación para el acceso al sistema ha sido enviado a su móvil: %number',VOICE_CODE:'Recibirá la llamada a su móvil: %number Ojo. le dictarán el código',PASSWORD_TOO_SHORT:'La contraseña debe contener al menos 6 dígitos',PASSWORDS_NOT_MATCH:'Las contraseñas introducidas no coinciden',PASSWORD_TOO_SIMPLY:'Su contraseña es demasiado corta',PHONE_NUMBER:'Numero de telefono',INVALID_CAPCHA:'El código de confirmación introducido es incorrecto',SYSTEM_ERROR:'Error de sistema. Intente actualizar la pagina (Ctrl+r или Ctrl+F5)',ALERT:'Ojo!'}},'pt':{name:'português',points:{LOGIN_TO_SYSTEM:'Entrar no sistema',YOUR_LANGUAGE:'Seu idioma:',EMAIL_OR_PHONE:'Correio eletrônico ou móvel:',EMAIL_OR_PHONE_FOR_EXAMPLE:'(Por exemplo: +7 903 999-66-77)',PASSWORD:'Senha:',LOGIN:'Entrar',GET_NEW_PASSWORD:'Obter a nova senha?',GET_NEW_PASSWORD_DESCRIPTION:'Se perdeu a sua antiga senha ou se entra na Área Pessoal pela primeira vez',GET_NEW_PASSWORD_BY_CODE:'Receber a nova senha pelo código da carta',REGISTRATION_IN_MMM:'Registo no sistema MMM',ADDITION_AUTH:'Autorização adicional',ADD_SECURITY_CHECKS:'Confirmação da segurança. Escolhe una das opções:',SMS_CODES_TABLE:'A tabela dos códigos SMS',GA_KEY_DESCRIPTION:'Código GA <a href="http://sergeymavrodi.com/news/19623-instruktsiya_dopolnitelnie_vozmozhnosti_avtorizatsii_v.html" target="_blank">As instruções estão aqui!</a>',VOICE_CALL:'Confirmação em voz',CANCEL:'Cancelar',NEXT:'Prosseguir',LOGIN_BY_GA:'Entrar com o código GA',ENTER_GA_KEY:'Introduza o código GA:',BACK:'Voltar',LOGIN_BY_SMS_CODES_TABLE:'entrar com a tabela dos códigos',ENTER_CODE_N:'introduza o código',GET_NEW_SMS_CODES_TABLE:'Se não tem esta mensagem solicite a nova cartão',ALL_CODES_USED:'” Não tem a cartão não usada dos códigos. Por favor solicite a nova cartão',SMS_CODES_TABLE_INSTRUCTION:'<a href="http://sergey-mavrodi-mmm.net/news/33330-izmeneniya_na_stranitse_avtorizatsii_lk.html" target="_blank">instruções para a tabela dos códigos</a>',GET_SMS_CODES_TABLE:'obter a tabela dos códigos',LOGIN_BY_VOICE_CALL:'entrap com a confirmação em voz',GET_NEW_CAPTCHA:'Obter novo código',ENTER_CAPTCHA_CODE:'para prosseguir introduza o código da imagem:',VOICE_CALL_DESCRIPTION:'dentro de 30 segundos receberá a chamada ao seu móvel. Introduza o código pronunciado:',GET_CODES_TABLE:'receber a tabela dos códigos',GET_CODES_TABLE_BUTTON:'Receber a tabela dos códigos',PASSWORD_RECOVERY:'recuperação da senha',EMAIL_OR_PHONE_EXAMPLE:'Correio eletrônico ou móvel:<br/><em style="font-size: 0.7em;">(por exemplo: +7 903 999-66-77)</em>',SEND_REQUEST:'enviar a solicitação',WARNING:'Advertência!',DO_NOT_SHOW_AGAIN:'Não mostrar mais\'',CHANGE_PASSWORD:'Cambiar a senha',CHANGE_PASSWORD_BUTTON:'Cambiar a senha',RECOVERY_CODE:' código da recuperação:',NEW_PASSWORD:'Nova senha:',REPEAT_NEW_PASSWORD:'Confirme a nova senha:',TOO_SHORT:'demasiado curto',SIMPLE:'simples',GOOD:'\'bom',VERY_GOOD:'muito bom',SAME_AS_USERNAME:'coincide com o nome do usuário',NO_PERMISSIONS:'” não tem bastantes direitos de acesso. Por favor contate o serviço de apoio',IE_NOT_SUPPORT:"<br /><br /><strong>O sistema não suporta o navegador Internet Explorer das versões depois 9!</strong><br /><br /><br />aconselhamos utilizar<a href='http://fx.yandex.ru'>Firefox</a>, ou subir a versão mais recente <a href='http://ie.yandex.ru/'>Internet&nbsp;Explorer</a>",SEND_CODE:'Ao seu móvel: %number foi enviado o código da confirmação',VOICE_CODE:'Ao seu móvel: %number receberá a chamada. Atenção! Vão pronunciar o código',PASSWORD_TOO_SHORT:'A senha deve conter ao menos 6 dígitos',PASSWORDS_NOT_MATCH:'As senhas introduzidas não coincidem',PASSWORD_TOO_SIMPLY:'A sua senha é demasiado simples',PHONE_NUMBER:'O número do telefone',INVALID_CAPCHA:'O código da confirmação é incorreto',SYSTEM_ERROR:'Erro do sistema, tente atualizar a página (Ctrl+r ou Ctrl+F5)',ALERT:'Atenção!'}},'ph':{name:'pilipino',points:{LOGIN_TO_SYSTEM:'Mag-login sa system',YOUR_LANGUAGE:'Your language:',EMAIL_OR_PHONE:'E-Mail o numero ng telepono:',EMAIL_OR_PHONE_FOR_EXAMPLE:'(halimbawa: +7 903 999-66-77)',PASSWORD:'Password:',LOGIN:'Login',GET_NEW_PASSWORD:'Gumawa ng bagong password?',GET_NEW_PASSWORD_DESCRIPTION:'Kung nakalimutan mo ang iyong lumang password o unang beses na mag-login sa PO',GET_NEW_PASSWORD_BY_CODE:'Gumawa ng bagong password sa pamamagitan email',REGISTRATION_IN_MMM:'Pagrehistro sa МММ System',ADDITION_AUTH:'Karagdagang pahintulot',ADD_SECURITY_CHECKS:'Securuty verification. Pumili ng isang pamamaraan:',SMS_CODES_TABLE:'SMS codes table',GA_KEY_DESCRIPTION:'GA key <a href="http://philippines-mmm.net/ph/for_begginers/" target="_blank">Instruction here!</a>',VOICE_CALL:'Voice call',CANCEL:'ikansela',NEXT:'sunod',LOGIN_BY_GA:' Mag-login gamit ang GA code',ENTER_GA_KEY:'Ilagay ang GA code:',BACK:'Balik',LOGIN_BY_SMS_CODES_TABLE:'Mag-login gamit ang sms code table',ENTER_CODE_N:'Ilagay ang code №',GET_NEW_SMS_CODES_TABLE:'Kung hindi mo natanggap ang mensaheng ito, kumuha ng bagong code table',ALL_CODES_USED:'Lahat ng code ay nagamit na, kumuha ng bagong code card',SMS_CODES_TABLE_INSTRUCTION:'<a href="http://philippines-mmm.net/ph/for_begginers/" target="_blank">Code Table Instruction</a>',GET_SMS_CODES_TABLE:'kumuha ng SMS Code Table',LOGIN_BY_VOICE_CALL:'Mag-login gamit ang voice call',GET_NEW_CAPTCHA:'Bagong code',ENTER_CAPTCHA_CODE:'i-Type ang code na nakita:',VOICE_CALL_DESCRIPTION:'Sa loob ng 30 segundo ikaw ay makakatanggap ng tawag sa iyong telepono. Ilagay ang code na iyong narinig:',GET_CODES_TABLE:'Gumawa ng code table',GET_CODES_TABLE_BUTTON:'Gumawa ng code table',PASSWORD_RECOVERY:'Pagkuha muli ng Password',EMAIL_OR_PHONE_EXAMPLE:'E-Mail or mobile phone:<br/><em style="font-size: 0.7em;">(halimbawa: +7 903 999-66-77)</em>',SEND_REQUEST:'Magpadala ng Hiling',WARNING:'Pagtuonang Pansin!',DO_NOT_SHOW_AGAIN:'Huwag ipakitang muli:',CHANGE_PASSWORD:'Baguhin ang password',CHANGE_PASSWORD_BUTTON:'Baguhin ang password',RECOVERY_CODE:'Recovery code:',NEW_PASSWORD:'Bagong password:',REPEAT_NEW_PASSWORD:'Ulitin ang bagong password:',TOO_SHORT:'Masyadong maikli',SIMPLE:'Simple',GOOD:'Mabuti',VERY_GOOD:'Mas Mabuti',SAME_AS_USERNAME:'Ang password ay kapareho ng pangalan ng gumagamit',NO_PERMISSIONS:'Ikaw ay walang pahintulot na mag-access, maaaring tumawag sa support',IE_NOT_SUPPORT:"<br /><br /><strong>Ang iyong browser ay hindi suportado. Ang minimum na pwedeng gamitin ay Internet Explorer 9!</strong><br /><br /><br />For the work with the system, we recommend using<a href='http://fx.yandex.ru'>Firefox</a>, либо обновить <a href='http://ie.yandex.ru/'>Internet&nbsp;Explorer</a>",SEND_CODE:'Ipapadala ang confirmation code sa iyong telepono: %numero',VOICE_CODE:'Ikaw ay makakatanggap ng tawag sa iyong telepono: %numero, maging alerto, ikaw ay makakarinig ng code',PASSWORD_TOO_SHORT:'Ang password ay hindi maaring bababa sa anim na karacter',PASSWORDS_NOT_MATCH:'Ang Password ay hindi tugma',PASSWORD_TOO_SIMPLY:'Ang iyong password ay napakasimple',PHONE_NUMBER:'Numero ng Telepono',INVALID_CAPCHA:'Ang numerong iyong inilagay ay hindi valid',SYSTEM_ERROR:'System error, i-refresh ang pahina (Ctrl+r или Ctrl+F5)',ALERT:'Pagtuonang Pansin'}},'cn':{name:'中文',points:{LOGIN_TO_SYSTEM:'登录系统',YOUR_LANGUAGE:'您的语言:',EMAIL_OR_PHONE:'您的邮箱或电话号码:',EMAIL_OR_PHONE_FOR_EXAMPLE:'（例如：+7 903 999-66-77）',PASSWORD:'密码:',LOGIN:'账户名',GET_NEW_PASSWORD:'获取新密码吗?',GET_NEW_PASSWORD_DESCRIPTION:'如果您忘记了旧密码或第一次登录到用户中心',GET_NEW_PASSWORD_BY_CODE:'获取新密码通过电子邮件',REGISTRATION_IN_MMM:',  注册在MMM系统',ADDITION_AUTH:',  额外的授权',ADD_SECURITY_CHECKS:'安全验证。选择一个选项:',SMS_CODES_TABLE:'短信代码表',GA_KEY_DESCRIPTION:'GA密码  <a href="http://china-mmm.net/for_begginers/" target="_blank">这里是说明!</a>',VOICE_CALL:'语音通话',CANCEL:'取消',NEXT:'进一步',LOGIN_BY_GA:'通过GA代码登录',ENTER_GA_KEY:'输入GA代码:',BACK:'回退',LOGIN_BY_SMS_CODES_TABLE:'通过短信码表登陆',ENTER_CODE_N:'输入验证码',GET_NEW_SMS_CODES_TABLE:'如果您没收到这条短信，得到一个新的码表',ALL_CODES_USED:'所有的代码已经被使用了，得到一个新的代码证',SMS_CODES_TABLE_INSTRUCTION:'<a href="http://sergey-mavrodi-mmm.net/news/33330-izmeneniya_na_stranitse_avtorizatsii_lk.html" target="_blank">码表说明</a>',GET_SMS_CODES_TABLE:'得到短信码表',LOGIN_BY_VOICE_CALL:'通过语音通话登录',GET_NEW_CAPTCHA:'新代码',ENTER_CAPTCHA_CODE:'输入验证码:',VOICE_CALL_DESCRIPTION:'30秒后，你会得到您的手机上的语音通话。输入您听到的代码:',GET_CODES_TABLE:'得到码表',GET_CODES_TABLE_BUTTON:'得到码表',PASSWORD_RECOVERY:'密码恢复',EMAIL_OR_PHONE_EXAMPLE:'邮箱或手机号码:<br/><em style="font-size: 0.7em;">（例如：+7 903 999-66-77）</em>',SEND_REQUEST:'发送请求',WARNING:'注意!',DO_NOT_SHOW_AGAIN:'不要再显示:',CHANGE_PASSWORD:'更改密码',CHANGE_PASSWORD_BUTTON:'更改密码',RECOVERY_CODE:'恢复代码:',NEW_PASSWORD:'新密码:',REPEAT_NEW_PASSWORD:'重复新密码:',TOO_SHORT:'太短',SIMPLE:'简单',GOOD:'好的',VERY_GOOD:'很好的',SAME_AS_USERNAME:'密码和用户的名字一样',NO_PERMISSIONS:'您没有权限访问，请联系反馈',IE_NOT_SUPPORT:"<br /><br /><strong>不支持您的浏览器。至少必需的是Internet Explorer 9！</strong><br /><br /><br />在系统平台上操作，我们建议使用<a href='http://fx.yandex.ru'>Firefox</a>, 或更新 <a href='http://ie.yandex.ru/'>Internet&nbsp;Explorer</a>",SEND_CODE:'一个确认代码将被发送到您的手机: %号码',VOICE_CODE:'您会得到手机上的语音通话: %号码, 要细心，您要听到一个代码',PASSWORD_TOO_SHORT:'密码不能少于6个字符',PASSWORDS_NOT_MATCH:'密码不匹配',PASSWORD_TOO_SIMPLY:'您的密码太简单',PHONE_NUMBER:'手机号码',INVALID_CAPCHA:'您输入的数字是无效的',SYSTEM_ERROR:'系统错误，更新页面 (Ctrl+r или Ctrl+F5)',ALERT:'注意'}},'hi':{name:'हिन्दी',points:{LOGIN_TO_SYSTEM:'प्रणाली में लॉगिन करें',YOUR_LANGUAGE:'आपकी भाषा:',EMAIL_OR_PHONE:'ई-मेल या फोन नंबर:',EMAIL_OR_PHONE_FOR_EXAMPLE:'(उदाहरण के लिए: +९१-९८६-२१८५-२०१)',PASSWORD:'पासवर्ड',LOGIN:'लॉगिन',GET_NEW_PASSWORD:'एक नया पासवर्ड प्राप्त करें?',GET_NEW_PASSWORD_DESCRIPTION:' अगर आप अपना पुराना पासवर्ड भूल गए हैं या पीओ में पहली बार लॉगिन कर रहे हैं ',GET_NEW_PASSWORD_BY_CODE:'ईमेल द्वारा एक नया पासवर्ड प्राप्त करें',REGISTRATION_IN_MMM:'प्रणाली में पंजीकरण',ADDITION_AUTH:'अतिरिक्त प्राधिकरण',ADD_SECURITY_CHECKS:'सुरक्षा सत्यापन। एक विकल्प का चयन करें: ',SMS_CODES_TABLE:'एसएमएस कोड तालिका',GA_KEY_DESCRIPTION:'जीए कुंजी <a href="http://mmmindia.in/in/for_begginers/" target = "_blank"> यहां निर्देश! </a> ',VOICE_CALL:'वॉयस कॉल',CANCEL:'रद्द करें',NEXT:'अगला',LOGIN_BY_GA:'जीए कोड से लॉगिन',ENTER_GA_KEY:'जीए कोड दर्ज करें:',BACK:'पीछे',LOGIN_BY_SMS_CODES_TABLE:'एसएमएस कोड तालिका द्वारा लॉगिन',ENTER_CODE_N:'कोड दर्ज करें',GET_NEW_SMS_CODES_TABLE:'अगर आपने यह संदेश प्राप्त नहीं किया है, एक नया कोड तालिका प्राप्त करें ',ALL_CODES_USED:'सभी कोड का उपयोग कर लिया गया है, एक नया कोड कार्ड प्राप्त करें',SMS_CODES_TABLE_INSTRUCTION:'<a href="http://mmmindia.in/in/for_begginers/" target="_blank"> कोड तालिका निर्देश </a>',GET_SMS_CODES_TABLE:'एसएमएस कोड तालिका प्राप्त करें',LOGIN_BY_VOICE_CALL:'वॉयस कॉल द्वारा लॉगिन करें',GET_NEW_CAPTCHA:'नया कोड',ENTER_CAPTCHA_CODE:'दिखाया गया कोड लिखें:',VOICE_CALL_DESCRIPTION:'30 सेकंड में आप अपने फोन पर एक वॉइस कॉल प्राप्त करेंगे। आप सुना गया कोड दर्ज करें: ',GET_CODES_TABLE:'कोड तालिका प्राप्त करें',GET_CODES_TABLE_BUTTON:'कोड तालिका प्राप्त करें',PASSWORD_RECOVERY:'पासवर्ड पुन:प्राप्ति',EMAIL_OR_PHONE_EXAMPLE:'ई-मेल या मोबाइल फोन: <br/> <em style = "font-size: 0.7em;"> (उदाहरण के लिए: +९१-९८६-२१८५-२०१) </em>',SEND_REQUEST:'एक अनुरोध भेजें',WARNING:'ध्यान दें!',DO_NOT_SHOW_AGAIN:'दोबारा मत दिखाएँ: ',CHANGE_PASSWORD:'पासवर्ड बदलें',CHANGE_PASSWORD_BUTTON:'पासवर्ड बदलें',RECOVERY_CODE:'पुन:प्राप्ति कोड:',NEW_PASSWORD:'नया पासवर्ड:',REPEAT_NEW_PASSWORD:'नया पासवर्ड दोहराएँ:',TOO_SHORT:'बहुत छोटा',SIMPLE:'सरल',GOOD:'अच्छा',VERY_GOOD:'बहुत अच्छा',SAME_AS_USERNAME:'पासवर्ड उपयोगकर्ता का नाम ही है',NO_PERMISSIONS:'आपको अभिगमन की अनुमति नहीं है, कृपया सहायता के लिए संपर्क करें ',IE_NOT_SUPPORT:"<br /> <br /> <strong> आपका ब्राउज़र समर्थित नहीं है। कम से कम इंटरनेट एक्सप्लोरर ९ की आवश्यकता है! </ strong> <br /> <br /> <br />प्रणाली में काम के करने के लिए, हम<a href='http://fx.yandex.ru'> फ़ायरफ़ॉक्स </a>, या पेज को ताज़ा करें <a href='http://fx.yandex.ru/'>Internet&nbsp;Explorer</a>, का उपयोग करने की सलाह देते हैं;",SEND_CODE:'एक पुष्टिकरण कोड आपके फोन पर भेजा जाएगा:% नंबर',VOICE_CODE:', आप अपने फोन पर एक वॉइस कॉल प्राप्त करोगे:% नंबर, सावधान रहिये,आप एक कोड सुनेंगे',PASSWORD_TOO_SHORT:'पासवर्ड ६ अक्षरों से कम का नहीं हो सकता है',PASSWORDS_NOT_MATCH:'पासवर्ड मेल नहीं खा रहा है',PASSWORD_TOO_SIMPLY:'आपका पासवर्ड बहुत सरल है',PHONE_NUMBER:'फ़ोन नंबर',INVALID_CAPCHA:'आपके द्वारा दर्ज नंबर मान्य नहीं है',SYSTEM_ERROR:'प्रणाली त्रुटि, पेज को ताज़ा करें (Ctrl +r या Ctrl + F5)',ALERT:'ध्यान दें'}},'id':{name:'Bahasa Indonesia',points:{LOGIN_TO_SYSTEM:'Masuk ke dalam sistim',EMAIL_OR_PHONE:'E-mail atau nomor telephone:',YOUR_LANGUAGE:'Bahasa Anda',EMAIL_OR_PHONE_FOR_EXAMPLE:'(contoh: +7 903 999-66-77)',PASSWORD:'Password:',LOGIN:'Masuk',GET_NEW_PASSWORD:'Mendapatkan password baru?',GET_NEW_PASSWORD_DESCRIPTION:'Jika anda lupa password lama atau masuk ke PO untuk pertama kalinya',GET_NEW_PASSWORD_BY_CODE:'Mendapatkan password baru dari email',REGISTRATION_IN_MMM:'Pendaftaran di Sistim',ADDITION_AUTH:'Otorisasi tambahan',ADD_SECURITY_CHECKS:'Verifikasi keamanan. Pilih salah satu pilihan:',SMS_CODES_TABLE:'SMS kode tabel',GA_KEY_DESCRIPTION:'Kunci GA <a href="http://indonesia-mmm.net/for_begginers/" target="_blank">Instruction here!</a>',VOICE_CALL:'Panggilan suara',CANCEL:'Membatalkan',NEXT:'Selanjutnya',LOGIN_BY_GA:'Masuk dengan kode GA',ENTER_GA_KEY:'Masukkan kode GA',BACK:'Kembali',LOGIN_BY_SMS_CODES_TABLE:'Masuk dengan sms kode tabel',ENTER_CODE_N:'Masukkan kode',GET_NEW_SMS_CODES_TABLE:'Jika anda belum menerima pesan, dapatkan kode tabel yang baru',ALL_CODES_USED:'Semua kode telah digunakan, dapatkan kode kartu yang baru',SMS_CODES_TABLE_INSTRUCTION:'<a href="http://indonesia-mmm.net/for_begginers/" target="_blank">Kode Tabel Instruksi</a>',GET_SMS_CODES_TABLE:'Dapatkan SMS Kode Tabel',LOGIN_BY_VOICE_CALL:'Masuk dengan panggilan suara',GET_NEW_CAPTCHA:'Kode baru',ENTER_CAPTCHA_CODE:'Ketikkan code yang ditunjukkan:',VOICE_CALL_DESCRIPTION:'Dalam 30 detik anda akan mendapatkan panggilan suara di telephone anda. Masukkan kode yang anda dengar:',GET_CODES_TABLE:'Dapatkan kode tabel',GET_CODES_TABLE_BUTTON:'Dapatkan kode tabel',PASSWORD_RECOVERY:'Pemulihan password',EMAIL_OR_PHONE_EXAMPLE:'E-mail atau telephone genggam:<br/><em style="font-size: 0.7em;">(contoh: +7 903 999-66-77)</em>',SEND_REQUEST:'Mengirim permintaan',WARNING:'Perhatian!',DO_NOT_SHOW_AGAIN:'Jangan menunjukkan lagi:',CHANGE_PASSWORD:'Merubah password',CHANGE_PASSWORD_BUTTON:'Merubah password',RECOVERY_CODE:'Pemulihan kode:',NEW_PASSWORD:'Password baru:',REPEAT_NEW_PASSWORD:'Ulangi password baru:',TOO_SHORT:'Terlalu pendek',SIMPLE:'Mudah',GOOD:'Bagus',VERY_GOOD:'Sangat bagus',SAME_AS_USERNAME:'Password sama seperti user name',NO_PERMISSIONS:'<strong>Browser anda tidak mendukung. Dibutuhkan minimum Internet Explorer 9!</strong><br /><br /><br />Untuk bekerja dengan sistim, kami rekomendasikan menggunakan<a href="http://fx.yandex.ru">Firefox</a>, либо обновить <a href="http://ie.yandex.ru/">Internet&nbsp;Explorer</a>',SEND_CODE:'Konfirmasi kode akan dikirimkan ke telephone anda: %nomor',VOICE_CODE:'Anda akan mendapatkan panggilan suara di telephone anda: %nomor, tolong diingat, anda akan mendengar kode',PASSWORD_TOO_SHORT:'Password tidak bisa lebih pendek dari 6 karakter',PASSWORD_TOO_SIMPLY:'Password anda terlalu mudah',PHONE_NUMBER:'Nomor telephone',INVALID_CAPCHA:'Nomor yang anda masukkan tidak valid',SYSTEM_ERROR:'Sistim Error, refresh halaman (Ctrl+r или Ctrl+F5)',ALERT:'Perhatian'}},'jp':{name:'日本語',points:{LOGIN_TO_SYSTEM:'システムへのログイン',YOUR_LANGUAGE:'あなたの言語:',EMAIL_OR_PHONE:'電子メール及び電話番号',EMAIL_OR_PHONE_FOR_EXAMPLE:'(例: +7 903 999-66-77)',PASSWORD:'パスワード:',LOGIN:'ログイン',GET_NEW_PASSWORD:'新パスワードを取得する?',GET_NEW_PASSWORD_DESCRIPTION:'もし旧パスワードをなくしたかPOへの初めてのログインの場合',GET_NEW_PASSWORD_BY_CODE:'レターからのコードで新パスワードを取得する',REGISTRATION_IN_MMM:'MMMシステムでの登録',ADDITION_AUTH:'追加承認',ADD_SECURITY_CHECKS:'安全確認、 次のいずれかを選択して下さい',SMS_CODES_TABLE:'smsコード表',GA_KEY_DESCRIPTION:'キーGA <a href="http://sergeymavrodi.com/news/19623-instruktsiya_dopolnitelnie_vozmozhnosti_avtorizatsii_v.html" target="_blank">取使い説明はここ！</a>',VOICE_CALL:'音声確認',CANCEL:'キャンセル',NEXT:'次',LOGIN_BY_GA:'GAコードでのログイン',ENTER_GA_KEY:'GAコードを入力して下さい:',BACK:'バック',LOGIN_BY_SMS_CODES_TABLE:'コード表でのログイン',ENTER_CODE_N:'コード№を入力して下さい',GET_NEW_SMS_CODES_TABLE:'もしあなたはこのsmsメッセージがなければ新コード表を依頼して下さい',ALL_CODES_USED:'あなたは有効なカードがないので新カードを依頼して下さい',SMS_CODES_TABLE_INSTRUCTION:'<a href="http://sergey-mavrodi-mmm.net/news/33330-izmeneniya_na_stranitse_avtorizatsii_lk.html" target="_blank">コード表の取使説明</a>',GET_SMS_CODES_TABLE:'コード表を取得する',LOGIN_BY_VOICE_CALL:'音声確認でのログイン',GET_NEW_CAPTCHA:'新コード',ENTER_CAPTCHA_CODE:'続きのために絵のコードを入力して下さい:',VOICE_CALL_DESCRIPTION:'30秒後にあなたの電話番号に電話される。言われたコードを入力して下さい:',GET_CODES_TABLE:'コード表の取得',GET_CODES_TABLE_BUTTON:'コード表を取得する',PASSWORD_RECOVERY:'パスワード回復',EMAIL_OR_PHONE_EXAMPLE:'電子メール及び携帯電話:<br/><em style="font-size: 0.7em;">(例: +7 903 999-66-77)</em>',SEND_REQUEST:'要求を送信する',WARNING:'警告!',DO_NOT_SHOW_AGAIN:'二度も表示しない:',CHANGE_PASSWORD:'パスワード変更',CHANGE_PASSWORD_BUTTON:'パスワードを変更する',RECOVERY_CODE:'回復コード:',NEW_PASSWORD:'新パスワード:',REPEAT_NEW_PASSWORD:'新パスワードを再入力して下さい:',TOO_SHORT:'短い',SIMPLE:'簡単',GOOD:'良い',VERY_GOOD:'とても良い',SAME_AS_USERNAME:'ユーザー名と一致している',NO_PERMISSIONS:'あなたはアクセス権利が足りないためにサポートチームに連絡して下さい',IE_NOT_SUPPORT:"<br /><br /><strong>システムはInternet Explorer 9以上のブラウザーしか対応してない!</strong><br /><br /><br />システム利用のためにお勧めするのは<a href='http://fx.yandex.ru'>Firefox</a>, あるいはアップデートする <a href='http://ie.yandex.ru/'>Internet&nbsp;Explorer</a>",SEND_CODE:'あなたの電話番号に: %number 確認コード送信する',VOICE_CODE:'あなたの電話番号に: %number 電話発信され、注意、コードを聞いて下さい',PASSWORD_TOO_SHORT:'パスワードは6桁以上必須',PASSWORDS_NOT_MATCH:'入力したパスワードは一致してない',PASSWORD_TOO_SIMPLY:'あなたのパスワードは簡単すぎ',PHONE_NUMBER:'電話番号',INVALID_CAPCHA:'確認コード不正',SYSTEM_ERROR:'システムエラーでページを更新して下さい (Ctrl+rまたはCtrl+F5)',ALERT:'注意'}},'tr':{name:'Türkçe',points:{LOGIN_TO_SYSTEM:'Sisteme giriş yap',YOUR_LANGUAGE:'Diliniz:',EMAIL_OR_PHONE:'E-Posta veya telefon numarası:',EMAIL_OR_PHONE_FOR_EXAMPLE:'(Örneğin: +7 903 999-66-77)',PASSWORD:'Şifre:',LOGIN:'Giriş yap',GET_NEW_PASSWORD:'Yeni bir şifre alın?',GET_NEW_PASSWORD_DESCRIPTION:'Eski şifrenizi unuttuysanız yada sisteme ilk kez giriş yapıyorsanız',GET_NEW_PASSWORD_BY_CODE:'E-posta ile yeni bir şifre alın',REGISTRATION_IN_MMM:'MMM kayıt ol',ADDITION_AUTH:'Ek yetkilendirme',ADD_SECURITY_CHECKS:'Güvenlik doğrulaması. Bir seçenek seçin:',SMS_CODES_TABLE:'SMS tablo kodları',GA_KEY_DESCRIPTION:'GA tuşu <a href="http://sergeymavrodi.com/news/19623-instruktsiya_dopolnitelnie_vozmozhnosti_avtorizatsii_v.html" target="_blank">Instruction here!</a>',VOICE_CALL:'Sesli arama',CANCEL:'İptal',NEXT:'Sonraki',LOGIN_BY_GA:'GA kodu ile Giriş Yap',ENTER_GA_KEY:'Giriş GA kodu:',BACK:'Geri',LOGIN_BY_SMS_CODES_TABLE:'sms kodu ile Giriş yap',ENTER_CODE_N:'Kodu Girin',GET_NEW_SMS_CODES_TABLE:'Bu Mesajı  almadıysanız\', \'tablodan yeni bir kod alın',ALL_CODES_USED:'Bütün kodlar kullanılmış, \'Yeni bir kod kartı alın',SMS_CODES_TABLE_INSTRUCTION:'<a href="http://sergey-mavrodi-mmm.net/news/33330-izmeneniya_na_stranitse_avtorizatsii_lk.html" target="_blank">Code Table Instruction</a>',GET_SMS_CODES_TABLE:'Tablodan Sms Kodu Al',LOGIN_BY_VOICE_CALL:'Sesli Arama ile giriş yap',GET_NEW_CAPTCHA:'Yeni Kod',ENTER_CAPTCHA_CODE:'Gösterilen kodu yazın:',VOICE_CALL_DESCRIPTION:'30 saniye içinde telefonunuzda sesli çağrı alırsınız. Duyduğunuz kodu girin:',GET_CODES_TABLE:'Tablodan kodlari alin',GET_CODES_TABLE_BUTTON:'Tablodan kodlari alin',PASSWORD_RECOVERY:'Şifre kurtarma:',EMAIL_OR_PHONE_EXAMPLE:'E-posta veya  telefon:<br/><em style="font-size: 0.7em;">(Örneğin: +7 903 999-66-77)</em>',SEND_REQUEST:'İstek gönder',WARNING:'UYARI!',DO_NOT_SHOW_AGAIN:'Tekrar gösterme:',CHANGE_PASSWORD:'Şifre değiştir',CHANGE_PASSWORD_BUTTON:'Şifre değiştir',RECOVERY_CODE:'Kurtarma kodu:',NEW_PASSWORD:'Yeni şifre:',REPEAT_NEW_PASSWORD:'Yeni şifreyi tekrardan gir:',TOO_SHORT:'Çok kısa',SIMPLE:'Basit',GOOD:'İyi',VERY_GOOD:'Çok iyi',SAME_AS_USERNAME:'Şifreniz kullanıcı adınız ile aynı',NO_PERMISSIONS:'Erişim için gerekli izinlere sahip değilsiniz lütfen destek için iletişime geçin',IE_NOT_SUPPORT:"<br /><br /><strong>minimum internet Explorer desteği için internet Explorer 9 sürümü gerekli!</strong><br /><br /><br />Sistemle ilgili sorun yaşamanız size tavsiyemiz <a href='http://fx.yandex.ru'>Firefox</a>, veya yenile <a href='http://ie.yandex.ru/'>Internet&nbsp;Explorer</a>",SEND_CODE:'Onay kodu telefonunuza gönderilecek',VOICE_CODE:'Telefonunuza bir sesli arama gelicek dikkatle dinleyin bir kod duyacaksınız',PASSWORD_TOO_SHORT:'Şifre en az 6 karakterden oluşmalıdır',PASSWORDS_NOT_MATCH:'Şifreler eşleşmiyor',PASSWORD_TOO_SIMPLY:'Tahmin edilmesi zor bir şifre yazın',PHONE_NUMBER:'Telefon numarası',INVALID_CAPCHA:'Girdiğiniz kod geçerli değil',SYSTEM_ERROR:'Sistem hatası sayfayı yenilemek için (Ctrl+r veya Ctrl+F5)',ALERT:'Dikkat'}},'ko':{name:'한국어',points:{LOGIN_TO_SYSTEM:'체계 로그인',YOUR_LANGUAGE:'당신의 언어:',EMAIL_OR_PHONE:'이메일 혹은 전화번호:',EMAIL_OR_PHONE_FOR_EXAMPLE:'(예로: +822 318-2116)',PASSWORD:'비밀번호:',LOGIN:'로그인',GET_NEW_PASSWORD:'새 비밀번호 받기',GET_NEW_PASSWORD_DESCRIPTION:'만약 당신이 자기 비밀번호를 잊어 버렸든가 혹은 모르는 경우',GET_NEW_PASSWORD_BY_CODE:'새 비밀번호를 이메일에 받기',REGISTRATION_IN_MMM:'MMM체계에 등록',ADDITION_AUTH:'추가검증',ADD_SECURITY_CHECKS:'안전검사. 한 가지 방안을 선택하세요:',SMS_CODES_TABLE:'SMS-코드 표',GA_KEY_DESCRIPTION:'구글 검증 코드 <a href="http://sergeymavrodi.com/news/19623-instruktsiya_dopolnitelnie_vozmozhnosti_avtorizatsii_v.html" target="_blank">안내서가 여기 있습니다!</a>',VOICE_CALL:'음성 호출',CANCEL:'취소',NEXT:'다음',LOGIN_BY_GA:'구글검증 코드를 이용하여 로그인',ENTER_GA_KEY:'구글검증 코드를 입력하세요:',BACK:'뒤로',LOGIN_BY_SMS_CODES_TABLE:'SMS-코드 표를 이용하여 로그인',ENTER_CODE_N:'1번 코드를 입력하세요',GET_NEW_SMS_CODES_TABLE:'만약 당신이 메시지를 받았다면 새 SMS-코드 표를 요청하세요',ALL_CODES_USED:'모든 코드가 이미 사용되었습니다. 새 SMS-코드 표를 받으세요',SMS_CODES_TABLE_INSTRUCTION:'<a href="http://sergey-mavrodi-mmm.net/news/33330-izmeneniya_na_stranitse_avtorizatsii_lk.html" target="_blank">SMS-코드 표 사용 안내서</a>',GET_SMS_CODES_TABLE:'SMS-코드 표 받기',LOGIN_BY_VOICE_CALL:'음성호출을 이용하여 로그인',GET_NEW_CAPTCHA:'다른 코드',ENTER_CAPTCHA_CODE:'화상 코드를 입력하세요:',VOICE_CALL_DESCRIPTION:'30초 지나 당신의 전화로 음성호출이 옵니다. 그 때 당신이 듣게 되는 코드를 입력하세요:',GET_CODES_TABLE:'SMS-코드 표 받기',GET_CODES_TABLE_BUTTON:'SMS-코드 표 받기',PASSWORD_RECOVERY:'비밀번호 복구',EMAIL_OR_PHONE_EXAMPLE:'이메일 혹은 핸드폰 번호:<br/><em style="font-size: 0.7em;">(예로:+822 318-2116)</em>',SEND_REQUEST:'요청 보내기',WARNING:'주의!',DO_NOT_SHOW_AGAIN:'더 현시하지 말것',CHANGE_PASSWORD:'비밀번호를 바꾸다',CHANGE_PASSWORD_BUTTON:'비밀번호를 바꾸다',RECOVERY_CODE:'복구 코드:',NEW_PASSWORD:'새 비밀번호:',REPEAT_NEW_PASSWORD:'새 비밀번호를 반복하세요:',TOO_SHORT:'지내 짧습니다',SIMPLE:'단순한',GOOD:'좋은',VERY_GOOD:'대단히 좋은',SAME_AS_USERNAME:'비밀번호가 사용자 이름과 동일합니다',NO_PERMISSIONS:'당신은 로그인 권한이 없습니다. 지원팀에 연계하세요',IE_NOT_SUPPORT:"<br /><br /><strong>당신의 브라우저가 인터넷 익스플러 9의 최소 요구를 지원하지 못합니다!</strong><br /><br /><br />우리 체계에서 작동하려면<a href='http://fx.yandex.ru'>Firefox</a>를 이용하거나 <a href='http://ie.yandex.ru/'>Internet&nbsp;Explorer</a>를 업데이트하세요",SEND_CODE:'확인코드가 당신의 핸드폰에 갈것입니다: %number',VOICE_CODE:'당신의 전화에 음성호출이 갈것입니다: %number, 주의 깊이 코드를 듣어야 합니다',PASSWORD_TOO_SHORT:'비밀번호는 기호가 6개 이상이어야 합니다',PASSWORDS_NOT_MATCH:'비밀번호가 일치하지 않습니다',PASSWORD_TOO_SIMPLY:'당신의 비밀번호가 난해성이 부족합니다',PHONE_NUMBER:'전화번호',INVALID_CAPCHA:'당신이 입력한 화상 코드가 정확지 않습니다',SYSTEM_ERROR:'체계오류, 페이지를 복원하세요 (Ctrl+r или Ctrl+F5)',ALERT:'주의환기'}}};var getLang=window.getLang=function(lang){if(typeof(locales[lang])=='undefined'){lang='en';}
return{ident:lang,vars:locales[lang].points};};var detectLang=window.detectLang=function(){var lang='';lang=$.cookie('lang');if(!lang&&typeof(navigator.language)!='undefined'){lang=navigator.language.split('-')[0].toLowerCase();}
return getLang(lang);};$(function(){var l=detectLang();$.each(locales,function(i,v){$('<option value="'+i+'">'+v.name+'</option>').appendTo($('#user_lang'));});$('#user_lang').val(l.ident);$('#user_lang').change(function(){var v=$(this).val();lang=getLang(v);$.cookie('lang',v,{path:'/',expires:360});do_translate();});});}(jQuery));