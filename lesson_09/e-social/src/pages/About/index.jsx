import React from "react";
import style from "./about.module.css";
import { registration } from "./data";

const About = () => {
  return (
    <div>
      <section className={style._portal__about___section}>
        <div className={style._main}>
          <h3 className={style._header}>Portal haqqında qısa məlumat</h3>
          <div className={style._header__txt}>
            <p>
              <q> e-sosial</q> internet portalı
              <q>
                Əmək, məşğulluq, sosial müdafiə və sosial təminat sahələrində
                elektron xidmətlərin tətbiqinin genişləndirilməsi haqqında
              </q>
              Azərbaycan Respublikası Prezidentinin 5 sentyabr 2018-ci il
              tarixli 258 №-li Fərmanına əsasən yaradılmışdır.
            </p>
            <p>
              "Azərbaycan Respublikasının Əmək və Əhalinin Sosial Müdafiəsi
              Nazirliyinin "Mərkəzləşdirilmiş elektron informasiya sistemi
              haqqında Əsasnamə"nin və "e-sosial" internet portalı haqqında
              Əsasnamə"nin təsdiq edilməsi barədə " AR Prezidentinin 15 aprel
              2019-cu il tarixli 534 №-li Fərmanı ilə e-sosial portalının{" "}
              <a href="http://www.e-qanun.az/framework/41978" target="_blank">
                Əsasnaməsi
              </a>{" "}
              təsdiq edilmişdir.
            </p>
          </div>
          <div className={style._link__text}>
            <b>Portal haqqında</b>
            <div className={style._portal__link}>
              <a href="#portal_about">E-sosial portalı nədir?</a>
            </div>
            <div className={style._portal__link}>
              <a href="#portal_about">E-sosial hansı sistemlə çalışır?</a>
            </div>
            <div className={style._portal__link}>
              {" "}
              <a href="#portal_about">
                E-sosialda hansı məlumatları görmək mümkündür?
              </a>
            </div>
          </div>
          <div className={style._link__text}>
            <b>E-sosialda qeydiyyat</b>
            {registration.map((r) => (
              <div className={style._portal__link}>
                {" "}
                <a href={r.link} target="_blank">
                  {r.text}
                </a>
              </div>
            ))}
          </div>
          <div>
            <b>E-sosialda funksiyalar</b>
            <div className={style._portal__link}>
              <a href="#esocial">Şəxsi kabinet</a>
            </div>
            <div className={style._portal__link}>
              <a href="#esocial">Əks əlaqə</a>
            </div>
            <div className={style._portal__link}>
              <a href="#esocial">Bildirişlər paneli</a>
            </div>
            <div className={style._portal__link}>
              <a href="#esocial">Fikir bankı</a>
            </div>
            <div className={style._portal__link}>
              <a href="#esocial">E-xidmətlər</a>
            </div>
            <div className={style._portal__link}>
              <a href="#esocial">Sual & cavab</a>
            </div>
          </div>
        </div>
      </section>
      <section id="portal_about" className={style._portal__about}>
        <div className={style._main}>
          <div className={style._portal__about___text}>
            <b className={style._bold__portal}>Portal haqqında</b>
            <div className={style._header__txt}>
              <p>
                Azərbaycanın Vahid Sosial Reyestri olan E-sosial portalı{" "}
                <a href="https://www.sosial.gov.az/" target="_blank">
                  Əmək və Əhalinin Sosial Müdafiəsi Nazirliyinin{" "}
                </a>{" "}
                nəzdində yaranmışdır. Bu portalda öz sosial müdafiə hüquqlarınız
                barədə Sizi maraqlandıran bütün məlumatları əldə edə bilərsiniz.
              </p>
            </div>
            <div className={style._header__txt}>
              <p>
                {" "}
                Saytda hər bir vətəndaş haqqında Mərkəzləşmiş Elektron
                İnformasiya Sistemindən götürülən məlumatlar yerləşdirilir.
                Həmin informasiyalar qeydiyyatdan keçdikdən sonra sadəcə açılan
                hesabın sahibinə göstərilir. Qeydiyyatdan keçən hər bir şəxsin
                şifrəsi mövcud olur və həmin şifrə olmadan sistemə girmək mümkün
                olmayır.
              </p>
            </div>
            <div className={style._header__txt}>
              <p>
                Saytda qeydiyyatdan keçdikdən sonra Əmək Müqaviləsi
                bildirişləri, pensiya təminatı, müavinət, ərizə və müraciətlər,
                ünvanlı sosial yardım, fərdi kapital, avtomobil və mənzil
                növbəsi və s. haqqında fərdi uçotunuza yerləşdirilən məlumatları
                görə biləcəksiniz. Həmin məlumatları izləməklə həm öz fərdi
                kapitalınız barədə məlumatlı olacaq həm də müəyyən edilən
                dəyişikliklərdən xəbərdar olacaqsınız.
              </p>
            </div>
          </div>
          <div id="esocial">
            <b className={style._bold__portal}>E-sosialda funksiyalar</b>
            <div className={style._header__txt}>
              <p>
                Şəxsi kabinetinizə daxil olduqdan sonra burada pensiya
                kapitalınız, bu vaxta qədər fərdi uçotunuza əlavə edilən bütün
                müqavilə bildirişləriniz göstəriləcəkdir. Eyni zamanda aldığınız
                pensiya, təqaüdlər haqqında məlumatları da buradan əldə edə
                bilərsiniz.
              </p>
            </div>
            <div className={style._header__txt}>
              <p>
                E-sosial portalında yaradılan “Əks əlaqə” funksiyası vasitəsilə
                hər hansı bir sahədə olan probleminizi və ya şikayətinizi
                bildirə bilərsiniz. Həmin ərizələr aidiyyəti orqanlar tərəfindən
                araşdırılacaq və Sizə müraciətinizlə bağlı məlumat veriləcəkdir.
                Bu funksiya sayəsində Nazirliyə gəlmədən birbaşa müracitənizi
                bizlərə çatdıracaqsınız. Biz isə öz növbəmizdə Sizə daha
                operativ xidmət göstərməyə çalışacağıq.
              </p>
            </div>
            <div className={style._header__txt}>
              <p>
                {" "}
                Bildirişlər paneli vasitəsilə sektorda baş verən yeniliklər
                barədə xəbərdar olacaqsınız. Bizimlə telefon və ya mail
                adresinizi paylaşmaqla həmin yeniliklər haqqında məlumatları
                intensiv olaraq əldə edəcək, həmçinin Pensiya kapitalınızın
                artması, əmək müqavilənizin bitmə tarixi, mənzil və avtomobil
                növbəsi dəyişikliyi və digər dəyişikliklərlə bağlı davamlı
                şəkildə bildiriş alacaqsınız.
              </p>
            </div>
            <div className={style._header__txt}>
              <p>
                Fikirləriniz bizim üçün çox dəyərlidir! Bu panel, edilməsini
                istədiyiniz dəyişiklikləri, ideyalarınızı bizimlə bölüşməyiniz
                üçün yaradılmışdır. Bu yolla fikirlərinizi, istəklərinizi
                anlayacaq və Sizə daha tez köməklik göstərmiş olacağıq.
              </p>
            </div>
            <div className={style._header__txt}>
              <p>
                Bu paneldə elektron xidmətlərdən necə istifadə edə biləcəyiniz
                haqqında təlimatlar yerləşdirilmişdir. Təlimatlar həm video həm
                də yazılı formada mövcuddur. Burada Sizə təqdim edilən
                keçidlərlə e-sosial habelə elektron hökümət portalından bir çox
                faydalı məlumat ala bilərsiniz.
              </p>
            </div>
            <div className={style._header__txt}>
              <p>
                Ən çox soruşulan suallar əsasında yaradılan bu hissədə suallar
                ilə yanaşı cavablar da qeyd edilmişdir. Həmin sualların içində
                Sizinlə bağlı məsələnin həllini tapmadıqda isə “Zəng Sifariş Et”
                funksiyasından istifadə edə bilərsiniz. Bundan sonra məsələ ilə
                bağlı ən qısa zamanda Sizə cavab zəngi ediləcəkdir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { About };
