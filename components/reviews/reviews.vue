<template lang="pug">
  section.section#reviews
    .reviews
      .reviews__bg
      .reviews__wrapper
        .container
          .reviews__content
            .reviews__header
              h2.reviews__title
                  | {{ $t('REVIEWS.TITLE') }}
                  .reviews__title--decorative.hatching-white
              // button.button.button--orange-filled(disabled) {{ $t('REVIEWS.LEAVE_FEEDBACK') }}
            .reviews__body
              .reviews__container
                .reviews__item.item
                  h3.item__title Спасибо за отдых
                  .item__header
                    .item__check-in
                      | Дата заезда:&nbsp;
                      span 15 июня 2018
                    .item__room
                      | Номер в отеле:&nbsp;
                      span «Standart»
                  .item__body
                    .item__text Новый комфортабельный отель. Номера шикарные, чистые. Были на открытии .к нашему приезду  и по нашей просьбе ребята успели подготовить беседку и мангал для шашлыков и отдыха на природе. Приедем еще раз.
                .reviews__item.item
                  h3.item__title Супер!
                  .item__header
                    .item__check-in
                      | Дата заезда:&nbsp;
                      span 10 марта 2018
                    .item__room
                      | Номер в отеле:&nbsp;
                      span «Семейный»
                  .item__body
                    .item__text Жили первыми в номере, новый отель, не все ещё налажено с сервисом, но ребята стараются! 👍 Номера светлые, с хорошим ремонтом, отличная мебель, ip тв 📺, бесплатный WiFi, трансфер до подьемников.
                .reviews__item.item
                  h3.item__title Замечательно отдохнули!
                  .item__header
                    .item__check-in
                      | Дата заезда:&nbsp;
                      span 5 марта 2018
                    .item__room
                      | Номер в отеле:&nbsp;
                      span «Grand Luxe»
                  .item__body
                    .item__text Даже трудно описать словами то впечатление, которое возникало каждый день! Благодарность, восторг, благополучие! В каждом кусочке двора, в каждой комнате, в ресторане. Так заботливо нас принимает атмосфера. Дух сердец руководителей, создателей этого пространства отражается во встречной улыбке сотрудников. Нам здесь рады. Нас любят. Нас хотят видеть снова. Спасибо просто огромное. Нас было 9 человек из Пятигорска и из Москвы. Все счастливы! Мы великолепно провели свой отдых.


</template>

<style lang="scss" >
  
  @import './reviews.scss';
</style>
