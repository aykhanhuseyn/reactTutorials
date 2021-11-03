import { v4 as uuid } from 'uuid';

export const services = [
	{
		name:
			'Vətəndaşların işaxtaran və işsiz kimi qeydiyyata alınması, qeydiyyatdan müvəqqəti çıxarılması və qeydiyyatın ləğv edilməsi',
		id: uuid(),
		selected: true,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Yeni iş yeri və boşalan iş yeri (vakansiya) barədə məlumatların təqdim edilməsi',
		id: uuid(),
		selected: true,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Avtomatlaşdırılmış pensiya təyinatı barədə məlumat',
		id: uuid(),
		selected: true,
		locked: false,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{ name: 'Pensiya kalkulyatoru', id: uuid(), selected: true, locked: true },
	{
		name: 'Ünvanlı sosial yardımla bağlı müraciətin edilməsi',
		id: uuid(),
		selected: true,
		locked: false,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{ name: 'Ştat cədvəli', id: uuid(), selected: true, locked: true },
	{
		name:
			'Tibbi-Sosial Ekspert Komissiyasında sonuncu müayinəyə dair məlumatın verilməsi',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{ name: 'İş yerinə dair arayış', id: uuid(), selected: false, locked: true },
	{
		name:
			'Tibbi-Sosial Ekspert Komissiyaları tərəfindən keçirilmiş müayinə barədə məlumatın verilməsi',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Pensiyaçıya məlumatların verilməsi',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Valideyn himayəsindən məhrum olmuş uşaqlar və övladlığagötürmə altsistemi',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Özünüməşğulluq proqramı iştirakçıları barədə məlumat',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Əmək müqaviləsi bildirişlərinin qeydiyyata alınması və bu barədə işəgötürənə məlumatın verilməsi',
		id: uuid(),
		selected: false,
		locked: false,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Dövlət sosial sığorta sistemində xüsusi hesabın aktivləşdirilməsi',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Dövlət sosial sığorta şəhadətnaməsinin dəyişdirilməsi və ya dublikatının verilməsi üçün müraciətin qəbulu - Vətəndaşlar üçün',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Peşə və Kvalifikasiya Standartlarının Reyestri',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Standartın hazırlanması və ya yenidən hazırlanması ilə bağlı müraciət',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Məcburi dövlət sosial sığortası üzrə hesabatların təqdim edilməsi',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Əmək müqaviləsi bildirişləri barədə məlumatların işçilər tərəfindən əldə edilməsi',
		id: uuid(),
		selected: false,
		locked: false,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Sığortaolunanın onlayn uçota alınması',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Dövlət sosial sığorta şəhadətnaməsinin dəyişdirilməsi və ya dublikatının verilməsi üçün müraciətin qəbulu',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Əmək qabiliyyətinin müvəqqəti itirilməsinə görə müavinətlə bağlı haqq-hesab cədvəlinin təqdim edilməsi',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Hamiləliyə və doğuma görə müavinətlə bağlı haqq-hesab cədvəlinin təqdim edilməsi',
		id: uuid(),
		selected: false,
		locked: false,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Vətəndaş müraciətlərinin izlənməsi',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Uşağın üç yaş tamam olanadək ona qulluq etməyə görə müavinətlə bağlı haqq-hesab cədvəlinin təqdim edilməsi',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Uşağın anadan olmasına görə müavinətlə bağlı haqq-hesab cədvəlinin təqdim edilməsi',
		id: uuid(),
		selected: false,
		locked: false,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Dəfn üçün müavinətin ödənilməsi ilə bağlı müraciətin və sənədlərin qəbulu',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Sığortaolunanın ölümünə dair məlumatın onlayn qəbulu',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Məcburi dövlət sosial sığorta vəsaitlərinin onlayn ödənilməsi',
		id: uuid(),
		selected: false,
		locked: false,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Sığortaedənin uçot nömrəsinin öyrənilməsi',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Sığortaolunanlara məlumatların verilməsi',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Sosial müavinətlərin və təqaüdlərin hesablanması üzrə sosial kalkulyator',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Pensiya təyinatı və pensiya növünün dəyişdirilməsi üçün müraciətin və sənədlərin qəbulu',
		id: uuid(),
		selected: false,
		locked: false,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'İstehsalatda baş verən bədbəxt hadisə barədə aidiyyəti dövlət strukturuna məlumatların verilməsi',
		id: uuid(),
		selected: false,
		locked: false,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name:
			'Kənd təsərrüfatına yararlı torpaq sahəsi olan şəxsin onlayn uçota alınması',
		id: uuid(),
		selected: false,
		locked: false,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Ailə kəndli təsərrüfatının onlayn uçota alınması',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
	{
		name: 'Sığortaedənin(Hüquqi şəxs) onlayn uçota alınması',
		id: uuid(),
		selected: false,
		locked: true,
		external: {
			egov: 'https://e-gov.az',
			tutorial: '/tutorial/1',
			video: '/tutoril/video/1',
			info: 'info/1',
		},
	},
];
