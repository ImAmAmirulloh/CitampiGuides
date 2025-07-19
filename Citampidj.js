//<script type="text/javascript" charset="utf-8">
//[[0Area,1[0url,1job,2time,3rc,4kom,5fis,6kec,7keu,8man,9syarat]]]

const dataCitamper=[
	[`Nabila`,`Nabila Resyaliani;6 September;Kasir Indomarket;Nonton Drakor, Membaca`,
		[`1`,`A-2;Pagi;Senin/Jumat`],
		[`2`,`A-3;Sore;Selasa/Kamis-Sabtu`],
		[`3`,`A-3;Malam;Selasa/Kamis/Sabtu`],
		[`4`,`A-4;Pagi-Sore;Selasa/Kamis`],
		[`.`,`.;.;.`]],
	[`Isma`,`Isma Nur Ainnisa;1 Februari;Kasir Indomarket;Memasak, Design Interior`,
		[`1`,`A-3;Pagi;Selasa/Kamis/Sabtu`],
		[`2`,`A-1;Siang;Selasa/Kamis/Sabtu`],
		[`3`,`A-1;Sore;Senin/Rabu/Jumat`],
		[`4`,`A-2;Pagi-Sore;Senin/Rabu`],
		[`.`,`.;.;.`]],
	[`Sarah`,`Sarah Angelia;4 Desember;Kasir Omegamart;Fashion, Body Care`,
		[`1`,`JoySteak;Sore;Senin/Rabu/Jumat—Minggu`],
		[`2`,`A-3;Sore—Malam;Senin/Rabu/Jumat—Minggu`],
		[`3`,`A-2;Malam;Senin/Rabu/Jumat—Sabtu`],
		[`4`,`JoySteak;Pagi—Sore;AllDay(Bisa Mancing`],
		[`.`,`.;.;.`]],
	[`Windy`,`Windy Lestari;1 Juli;Kasir Omegamart;Olahraga`,
		[`1`,`A-1;Pagi;Senin/Rabu/Jumat—Minggu`],
		[`2`,`GoWes;Siang;Senin/Rabu/Jumat—Minggu`],
		[`3`,`A-1;Malam;Selasa/Kamis/Sabtu`],
		[`4`,`A-1;Pagi—Sore;AllDay`],
		[`.`,`.;.;.`]],
	[`Citra`,`Citra Amalia Putri;1 Desember;Kasir Mr Rolands;Mendengarkan Musik`,
		[`1`,`A-5;Sore;Senin/Rabu/Jumat—Sabtu`],
		[`2`,`A-4;Pagi—Siang;Selasa/Kamis/Sabtu`],
		[`3`,`A-5;Siang;.`],
		[`4`,`A-4;Pagi—Sore;AllDay`],
		[`.`,`.;.;.`]],
	[`Jessica`,`Jessica Althanissa;7 Maret;Kasir Mr Rolands;Menggambar, Travelling`,
		[`1`,`A-5;Pagi/Siang;Selasa/Kamis/Sabtu—Minggu`],
		[`2`,`A-3;Siang/Sore;Sabtu—Minggu`],
		[`3`,`A-5;Sore;AllDay`],
		[`4`,`A-5;Pagi—Sore;AllDay`],
		[`.`,`.;.;.`]],
	[`Julia`,`Julia Frederica Mangunkarto;5 Juni;Sosialita;Travelling`,
		[`1`,`A-6;Malam;(PenaFountain)`],
		[`2`,`A-6;Malam;(Kacamata,KalungNameTag,Kosmetik,Topi)(SeragamBiru);`],
		[`3`,`A-6;Malam;(WalkieTalkie,Tikus);`],
		[`4`,`A-6;Malam;(MesinBubut,IkanBarakuda,BoluPisang)`],
  [`5`,`A-6;Malam;(Sekop,Senter)`],
		[`.`,`.;.;.`]],
	[`Tasya`,`Tasya Wulandari;6 Februari;Kasir FFC;Membaca, Menulis`,
		[`1`,`Gromedia;Sore;Senin/Rabu/Minggu`],
		[`2`,`A-5;Siang;Selasa/Sabtu—Minggu`],
		[`3`,`A-3;Malam—Larut;.`],
		[`4`,`A-4;Pagi—Sore;AllDay`],
		[`.`,`.;.;.`]],
	[`Indah`,`Indah Putri Savitri;5 Maret;Suster;Merajut`,
		[`1`,`A-6;Malam;Selasa/Kamis/Sabtu`],
		[`2`,`A-2;Sore;Selasa/Kamis/Sabtu`],
		[`3`,`Klinik;Siang;Senin/Rabu/Jumat`],
		[`4`,`Klinik;Saat Buka;AllDay(Bisa Mulung`],
		[`.`,`.;.;.`]],
	[`Nissa`,`Annissa Lavika;3 Nopember;Guru;Main sama anak-anak, Makan snack`,
		[`1`,`A-6;Siang;Senin/Rabu/Jumat`],
		[`2`,`A-2;Malam;Rabu/Sabtu`],
		[`3`,`A-6;Siang;Senin/Rabu/Jumat`],
		[`4`,`A-6;Sore;Senin—Jumat`],
		[`.`,`.;.;.`]],
	[`Milah`,`Milah Sarmilah;5 Desember;Jaga Warung di Bojong Lima;Masak, Menjahit`,
		[`1`,`WarungNasi;Pagi—Sore;(Punya Mobil`],
		[`2`,`JalanSetapak;Sore;(Punya Mobil`],
		[`3`,`PinggiranSungai;Malam;(Punya Mobil`],
		[`4`,`DistrohGawhul;.;(Punya MejaProduksi`],
		[`.`,`.;.;.`]],
	[`Tio`,`Tio Nurcahyo;1 April;Satpam Komplek Citampi;Main Gitar, Memancing`,
		[`1`,`A-3;Larut;.`],
		[`2`,`Klinik;Alltime;Allday`],
		[`3`,`A-1;Siang—Sore;.`]],
	[`MbahSen`,`Joko Sena;7 Februari;Tidak Diketahui;Bermeditasi`,
		[`1`,`A-2;Sore;.`],
		[`2`,`A-2;Sore;.`],
		[`3`,`A-3;Siang—Sore;.`]],
	[`Tuti`,`Tuti Mutia;4 April;Pemilik Indekos;Memasak`,
		[`1`,`A-4;Siang—Sore;.`],
		[`2`,`A-4;Siang—Sore;.`],
		[`3`,`A-4;Pagi;Senin—Jumat`]],
	[`Dimas`,`Dimas Taufik;4 Januari;Dokter;Membaca`,
		[`1`,`Klinik;Siang—Sore;Senin—Sabtu`],
		[`2`,`A-2;Siang/Malam;.`],
		[`3`,`Klinik;Sore—Malam;(Energi <50%`]],
	[`Tigor`,`Tigor S.;7 Agustus;Pelatih Gym;Olahraga`,
		[`1`,`Gym;Alltime;Allday`],
		[`2`,`Gym;Alltime;Allday`],
		[`3`,`Cinemak;Sore—Malam;.`]],
	[`Lela`,`Lelasari;5 Juli;Pemilik Indekos;Memasak, Menari`,
		[`1`,`A-2;Siang—Sore;.`],
		[`2`,`A-4;Siang—Sore;Senin/Rabu—Sabtu`],
		[`3`,`A-4;Siang—Sore;Senin/Rabu—Sabtu`]],
	[`Seno`,`Seno Suryo;7 Agustus;Guru;Membaca, Menulis`,
		[`1`,`A-3;Pagi/Sore;.`],
		[`2`,`A-3;Sore;.`],
		[`3`,`A-4;Sore;.`],
		[`Quest 1`,`A-#;Alltime;(Panci,Telur,Tepung,TusukSate,Rc 1000`],
  	[`Quest 2`,`A-#;Alltime;(LaptopRakitan`]],
	[`Arpat`,`Arpat Firman;5 Mei;Penjaga Warnet;Mendengarkan Musik Dangdut`,
		[`1`,`Warnet;Alltime;Allday`],
		[`2`,`A-3;Malam;Senin—Sabtu`],
		[`3`,`Warnet;Malam—Larut;Allday`]],
	[`Alex`,`Atep Lexmana;5 April;Pemilik Distro;Menyanyi Lagu Rap`,
		[`1`,`Distro;Alltime; Allday`],
		[`2`,`A-4;Pagi—Siang;Rabu/Minggu`],
		[`3`,`A-4;Siang—Sore;Rabu/Minggu`]],
	[`Imas`,`Imas Nurullatifa;7 Juni;Perawat;Menyanyi`,
		[`1`,`Klinik;Alltime;Allday`],
		[`2`,`Klinik;Alltime;Allday`],
		[`3`,`A-2;Sore—Malam;Minggu`],
		[`4`,`A-;.;.`],
		[`.`,`.;.;.`]],
	[`Nopandi`,`Ian Nopandi;6 Nopember;PNS;Wisata Kuliner`,
		[`1`,`Distro;Alltime;Allday`],
		[`2`,`A-2;Pagi—Sore;Senin—Sabtu`],
		[`3`,`Gym;Malam;Senin—Sabtu`]],
	[`Tatang`,`Tatang Suratang;1 April;Pedagang;Memancing`,
		[`1`,`A-1;Pagi—Malam;Senin—Sabtu`],
		[`2`,`A-1;Pagi—Malam;Senin—Sabtu`],
		[`3`,`A-4;Malam;Minggu`]],
	[`Didi`,`Didi Cahyadi;5 Februari;Ustadz;Membaca`,
		[`1`,`A-1;Sore;Senin—Sabtu`],
		[`2`,`A-3;Siang—Sore;.`],
		[`3`,`A-2;Sore;.`]],
	[`Soleh`,`Soleh Abidin;5 Agustus;Ketua RT;Ngobrol`,
		[`1`,`A-2;Siang—Sore;Senin—Jumat`],
		[`2`,`Sipil;Siang—Sore;Senin—Jumat`],
		[`3`,`A-5;Sore;Kamis/Minggu`]],
	[`Noer`,`Noer Rohmah;1 Mei;Pemilik Warung;Berdagang`,
		[`1`,`A-3;Pagi;Selasa/Minggu`],
		[`2`,`A-4;Siang;Senin/Rabu/Jumat`],
		[`3`,`A-3;Sore;Rabu—Kamis/Minggu`]],
	[`Lina`,`Lina Lesmana;1 September;Siswi SD;Jajan, Bermain`,
		[`1`,`A-3;Sore;Senin—Sabtu`],
		[`2`,`A-4;Pagi—Sore;Minggu`],
		[`3`,`A-3;Sore;Senin—Sabtu`]],
	[`Rara`,`Rara Anindra;4 Mei;Siswi SD;Main, Makan Jajanan`,
		[`1`,`A-2;Sore;Senin—Rabu`],
		[`2`,`A-3;Sore;Rabu—Jumat`],
		[`3`,`A-3;Pagi—Sore;Sabtu—Minggu`]],
	[`Shelli`,`Shelli Nurahman;3 September;Siswi SD;Bermain, Jajan`,
		[`1`,`A-1;Sore;Senin—Sabtu`],
		[`2`,`A-3;Pagi—Sore;Minggu`],
		[`3`,`A-2;Sore;Senin—Sabtu`]],
	[`Joko`,`Hantu Joko Sena;7 Agustus;Menemukan Kembali Cinta Yang Hilang;Gentayangan`,
		[`1`,`A-1;Larut malam;Senin/Kamis-Jumat`],
		[`2`,`A-3;Larut malam;Selasa-Kamis`],
		[`3`,`A-1;Larut malam;Rabu`],
		[`4`,`Ena-ena Hotel;Larut malam;Selasa/Jumat`],
		[`5`,`A-6;Larut malam;Minggu`]],
	[`Asih`,`Suciasih;1 Juli;Menunggu Cinta Pertama Datang;Nyuri kopi Pak Tio`,
		[`1`,`A-1;Larut malam;Kamis`],
		[`2`,`Omegamart;Malam;Sabtu`],
		[`3`,`A-2;Malam;Senin`],
		[`4`,`A-1;Larut malam;Kamis(Baju pocong`],
		[`5`,`;;`]]
];
function showCitamper() {
	const citamperArea = document.querySelector('.citamperArea');
	let tcitamperArea='';
	for (let i=0; i<dataCitamper.length; i++) {
		tcitamperArea+=`<t onclick="getBio(${i},1);" ondbclick="getBio(${i},0);" class="icon ${dataCitamper[i][0]}"><img src="Images/CharIcon/${dataCitamper[i][0]}.png" alt="${dataCitamper[i][0]}"></t>`;
		//tcitamperImg+=`<input type="radio" name="citamper" id="${dataCitamper[i][0]}"/>`;
	}
	citamperArea.innerHTML=tcitamperArea;
}
function getBio(id,bool) {
	const citamperBio = document.querySelector('.citamperBio');
	let tcitamperBio='';
	var brdr;
	switch (bool) {
		case 1:
			document.querySelector(`.${dataCitamper[id][0]}`).style.borderBottom = "2px solid snow";
			let bio1=dataCitamper[id][1].split(';');
			tcitamperBio+=`<icol>
			<irow><img src='Images/CharIcon/${dataCitamper[id][0]}.png'><icol>
				<irow><b>Nama</b><t>:</t><t>${bio1[0]}</t></irow>
				<irow><b>Lahir</b><t>:</t><t>${bio1[1]}</t></irow>
				<irow><b>Pekerjaan</b><t>:</t><t>${bio1[2]}</t></irow>
				<irow><b>Hobi</b><t>:</t><t>${bio1[3]}</t></irow>
			</icol></irow>`;
			for (let j=2; j<dataCitamper[id].length; j++) {
				let bio2=dataCitamper[id][j][1].split(';');
				var hati='&hearts;';
				bio2[2]=bio2[2].replace('(',' &#9888;');
				tcitamperBio+=`<irow><b>${hati+dataCitamper[id][j][0]}</b><t>Tempat ${bio2[0]}, ${bio2[1]}, ${bio2[2]}</t></irow>`;
				}
			tcitamperBio+=`</icol>`;
			citamperBio.innerHTML=tcitamperBio;
			break;
			default:
				document.querySelector(`.${dataCitamper[id][0]}`).style.borderBottom = "none";
			citamperBio.innerHTML=`No Bio Data`;
			break;
		}
	}

const dataLatihan=[
 [`Gym`,[`Fisik +10`,`Energi -40`,`Waktu -120`,`<rc>40</rc>`]],
 [`Cinemak`,[`FilmDokumenter +<kp>5</kp>`,`FilmInspirasional +100 energi`]],
 [`TV`,[`FilmDokumenter +<kp>4</kp>`,`FilmInspirasional +75 energi`]],
 [`Warnet`,[`Kecerdasan +10`,`Energi -20`,`Waktu -240`,`<rc>50</rc>`]],
 [`Rumah`,[[`Kecerdasan +4`,`Energi -5`,`Waktu -75`],
           [`Fisik +5`,`Energi -15`,`Waktu -45`],
           [`Komunikasi +2`,`Energi -5`,`Waktu -90`]]]
];

const dataUsaha=[
	[`Katering`,`Kuliner, Seni Kerajinan`,
	 [`Lv1`,`+<rc>220/1100`,[`Wajan;1`,`Teko;2`,`Sendok;3`,`Garpu;3`,`PenyedapRasa;1`]],
	 [`Lv2`,`+<rc>420/2100`,[`BatuHias;3`,`PlatBaja;3`,`Topperware;1`,`ToplesKaca;2`,`TokenKepercayaanEmas;1`]],
	 `Topperware`,`Cilok`,`Gorengan`,`Seblak`,`Bakso`],
	[`Bengkel Kerajinan`,`SeniKerajinan, Pendidikan`,
	 [`Lv1`,`+<rc>230/1150`,[`TanahLiat;2`,`KalengCat;3`,`BenangJahit;3`,`TubeLem;1`,`Kain;1`]],
	 [`Lv2`,`+<rc>450/2250`,[`BotolTinta;3`,`ToplesKaca;2`,`ArtBook;1`,`Ubin;3`,`KerikilWarnaWarni;1`,`TokenKepercayaanEmas;1`]],
	 `Boneka`,`TopiRajutan`,`KaosKakiRajutan`,`PatungKuno`,`BalokMainan`],
	[`Pengarang Buku`,`Literatur, Komunikasi`,
	 [`Lv1`,`+<rc>240/1200`,[`Pensil;3`,`Notebook;5`,`Novel;3`,`Cerpen;1`,`Puisi;1`]],
	 [`Lv2`,`+<rc>480/2400`,[`LaporanRisetTerbaru;3`,`PenaFountain;1`,`BotolTinta;3`,`PatungKuno;1`,`TokenKepercayaanEmas;1`]],
	 `Pensil`,`Notebook`,`MajalahBekas`,`Novel`,`PenaFountain`],
	[`Salon`,`Kecantikan, Kesehatan & Kebugaran`,
	 [`Lv1`,`+<rc>250/1250`,[`Kosmetik;1`,`MajalahCewek;3`,`Sisir;3`,`Kuas;1`]],
	 [`Lv2`,`+<rc>510/2550`,[`LampuBohlam;2`,`Kaca;6`,`ToplesKaca;2`,`PilarMarmer;3`,`TokenKepercayaanEmas;1`]],
	 `CerminGenggam`,`Kuas`,`Kosmetik`,`Parfum`,`MajalahCewek`],
	[`Studio Foto`,`Kecantikan, Seni Kerajinan`,
	 [`Lv1`,`+<rc>245/1225`,[`Keranjang;2`,`Kain;2`,`Terpal;1`,`Tripleks;5`]],
	 [`Lv2`,`+<rc>500/2500`,[`BatuHias;2`,`Kaca;6`,`PilarMarmer;2`,`KerikilWarnaWarni;2`,`TokenKepercayaanEmas;1`]],
	 `PasFoto`,`AlbumFoto`,`PiguraFoto`,`RolFilm`],
	[`Tempat Les`,`Pendidikan, Komunikasi`,
	 [`Lv1`,`+<rc>250/1250`,[`Pensil;1`,`Notebook;3`,`Kamus;3`,`JamWeker;1`]],
	 [`Lv2`,`+<rc>510/2550`,[`PenaFountain;1`,`BotolTinta;3`,`LaporanRisetTerbaru;1`,`SirkuitElektronik;3`,`TokenKepercayaanEmas;1`]],
	 `Notebook`,`LaporanRisetTerbaru`]
];
function showUsaha() {
	const usahaArea = document.querySelector('.usahaArea');let tusahaArea='';
	for (let i=0; i<dataUsaha.length; i++) {
		tusahaArea+=`<icol><irow><img src="Images/Icon/${dataUsaha[i][0]}.png">
		<icol>${dataUsaha[i][1]}
			<t>${dataUsaha[i][2][0]}: <rc><img src="Images/Icon/koin.png"/>${dataUsaha[i][2][1]}</rc></t><irow>`;
			for (let l1=0; l1<dataUsaha[i][2][2].length; l1++) {
				var item=dataUsaha[i][2][2][l1].split(';');
				tusahaArea+=`<t><img src="Images/InventoryItem/${item[0]}.png"><f>${item[1]}</f></t>`;
			}
		tusahaArea+=`</irow>
		<t>${dataUsaha[i][3][0]}: <rc><img src="Images/Icon/koin.png"/>${dataUsaha[i][3][1]}</rc></t><irow>`;
			for (let l1=0; l1<dataUsaha[i][3][2].length; l1++) {
				var item=dataUsaha[i][3][2][l1].split(';');
				tusahaArea+=`<t><img src="Images/InventoryItem/${item[0]}.png"><f>${item[1]}</f></t>`;
			}
		tusahaArea+=`</irow>`;
		tusahaArea+=`</icol></irow><irow><b contenteditable='true'>${dataUsaha[i][0]}</b><icol>Rewards<irow>`;
		for (let j=4; j<dataUsaha[i].length; j++) {
			tusahaArea+=`<img src="Images/InventoryItem/${dataUsaha[i][j]}.png">`;
		}
		tusahaArea+=`</irow></icol></irow></icol>`;
	}
	usahaArea.innerHTML=tusahaArea;
}
//</script>