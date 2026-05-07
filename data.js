// ================= DATA PRODUK =================

const products = [
  {
    category: "abaya",
    name: "Abaya cheongsam modern terbaru cantik elegan",
    price: "Rp185.000",
    link: "https://s.shopee.co.id/7VD3AYdtwm",
    image: "https://i.imgur.com/MSBLR32.png"
  },
  {
    category: "abaya",
    name: "Yasmen abaya dress bahan marbela anti uv aplikasi payet mutiara abaya umroh anti uv simple",
    price: "Rp126.000",
    link: "https://s.shopee.co.id/gM5YnDhJI",
    image: "https://i.imgur.com/1ntvjJ4.jpeg"
  },
 {
    category: "abaya",
    name: "Abaya Qanita Anti UV Premium Abaya Haji Dan Umroh",
    price: "Rp169.000",
    link: "https://s.shopee.co.id/3B3QYhtfr2",
    image: "https://i.imgur.com/OBQe8gv.jpeg"
  },
 {
    category: "abaya",
    name: "Rizka Hijab - Esra Abaya Set Khimar Bandana anti UV (Ready Stoc",
    price: "Rp379.000",
    link: "https://s.shopee.co.id/2qQaqu9fK9",
    image: "https://i.imgur.com/oA9C646.jpeg"
  },
 {
    category: "abaya",
    name: "Dafinty - Noora Set 3 in 1 Abaya Tunik Set Skirt Pashmina Bahan Premium Crinkle",
    price: "Rp192.000",
    link: "https://s.shopee.co.id/qfWU9OVCK",
    image: "https://down-bs-id.img.susercontent.com/id-11134207-7r98x-lybsk21z34x9de.webp"
  },
 {
    category: "abaya",
    name: "Zhafira Abaya/Abayaterbaru/ Abaya mesir/ Abaya jekinian cantik mewah elegan",
    price: "Rp176.999",
    link: "https://s.shopee.co.id/AKWbmtPlMy",
    image: "https://i.imgur.com/OBQe8gv.jpeg"
  },
 {
    category: "abaya",
    name: "DFM - Naurah Abaya READY (Exclusif) Dress Series Tanpa Hijab Bahan Sabrina Anti UV Abaya Gamis Terbaru By DFM",
    price: "Rp157.900",
    link: "https://s.shopee.co.id/70G9rtFZ4y",
    image: "https://down-aka-id.img.susercontent.com/id-11134207-81zte-mf9aljdrk0ssbb.webp"
  },
 {
    category: "abaya",
    name: "MASAYU ABAYA by SABRINA - GAMIS ABAYA WANITA PREMIUM BAHAN FAMOUS OUTER INNER MENYATU / SIZE S M XL",
    price: "Rp190.000",
    link: "https://s.shopee.co.id/5q4CZW9Exj",
    image: "https://down-aka-id.img.susercontent.com/id-11134207-7r992-lxtn2s653w5m6d.webp"
  },
  {
    category: "abaya",
    name: "ORI RANIKO - GAMIS set Khimar Jenna ANTI UV protection | Abaya Set cargo Free cadar by Raniko Syari",
    price: "Rp325.000",
    link: "https://s.shopee.co.id/808gJqjNuS",
    image: "https://down-bs-id.img.susercontent.com/id-11134207-7rbka-m6jlqf9j5gfg36.webp"
  },
  {
    category: "jaket",
    name: "JAKET ORIGINAL FCF /JAKET PRIA/WANITA JAKET GUNUNG JAKET OUTDOOR WATERPROOF",
    price: "Rp129.999",
    link: "https://s.shopee.co.id/8phoLDI4gd",
    image: "https://down-tx-id.img.susercontent.com/id-11134207-7r991-lnx3oexrpare55.webp"
  },
 {
    category: "jaket",
    name: "EMWEHA Jaket Denim Wanita Oversize Bigmouse",
    price: "Rp132.075",
    link: "https://s.shopee.co.id/4VYpBiUDEz",
    image: "https://down-tx-id.img.susercontent.com/id-11134207-7r98z-lm02ordu8m18f9.webp"
  },
 {
    category: "jaket",
    name: "Jaket Varsity Hoodie FULL BORDIR Strue Original Premium / Jaket Varsity Baseball Full Bordir Reglan / Jaket Baseball Varsity Original",
    price: "Rp59.999",
    link: "https://s.shopee.co.id/4fsFOLllB2",
    image: "https://down-tx-id.img.susercontent.com/id-11134207-7r98p-lwqdty16o6tmb9.webp"
  },
 {
    category: "jaket",
    name: "Elzanteri Apparrel - Lorica Jaket Bomber Wanita",
    price: "Rp209.789",
    link: "https://s.shopee.co.id/60NczCxBpu",
    image: "https://down-tx-id.img.susercontent.com/id-11134207-7rbk8-m6sje8dy7hd9b7.webp"
  },
 {
    category: "jaket",
    name: "Hoodie zipper wanita cute cat premium aesthetic jaket wanita terbaru couple bestie viral murah l xl xxl bahan fleece sweatshirt hoodie wanita dewasa hoodie resleting cowok keren",
    price: "Rp66.957",
    link: "https://s.shopee.co.id/3VgI0sMArI",
    image: "https://down-tx-id.img.susercontent.com/id-11134207-7rbk0-martsp5r8sv282.webp"
  },
 {
    category: "jaket",
    name: "ATASAN RAJUT WANITA ( SW mutiara) Sweater Rajut Wanita Jaket Import Wanita Lengan Panjang",
    price: "Rp186.200",
    link: "https://s.shopee.co.id/901EbuUl6C",
    image: "https://down-tx-id.img.susercontent.com/id-11134207-7r98t-lror3uur4gmsbd.webp"
  },
 {
    category: "jaket",
    name: "Jaket Pakai Kupluk Terbaru Tahan Air dan Angin ZHAGO ORIGINAL",
    price: "Rp158.200",
    link: "https://s.shopee.co.id/8phoPuxOfq",
    image: "https://down-tx-id.img.susercontent.com/id-11134207-81ztd-me1jdkdds4quc0.webp"
  },
 {
    category: "jaket",
    name: "Elzanteri Sabrina Jaket Wanita Bolak Balik",
    price: "Rp250.619",
    link: "https://s.shopee.co.id/4AvyrxbPsg",
    image: "https://down-tx-id.img.susercontent.com/id-11134207-7rasi-m353idxfto23c7.webp"
  },
 {
    category: "jaket",
    name: "JAKET JEANS OVERSIZE BORDIR KODE MP 069 F / JAKET DENIM WANITA / JAKET JEANS BORDIR KEKINIAN",
    price: "Rp165.980",
    link: "https://s.shopee.co.id/7Kt0fBCHje",
    image: "https://down-tx-id.img.susercontent.com/id-11134207-7rbk7-maguehncpiqm80.webp"
  },
 {
    category: "jaket",
    name: "Mngstoreco Jaket Pria Waterproof Tebal Warna Hitam",
    price: "Rp138.624",
    link: "https://s.shopee.co.id/2qQbL2bceg",
    image: "https://down-bs-id.img.susercontent.com/id-11134207-81zth-mfcizvi9qux73f.webp"
  },
 {
    category: "jaket",
    name: "JINISO - Oversize Jaket Jeans",
    price: "Rp199.500",
    link: "https://s.shopee.co.id/3qJ8X34y2q",
    image: "https://down-bs-id.img.susercontent.com/id-11134207-7r98z-lpnxammlt9qj7c.webp"
  },
 {
    category: "jaket",
    name: "MnG Jaket Winter Wanita Waterproof Windproof Puffer Tebal Musim Dingin",
    price: "Rp109.000",
    link: "https://s.shopee.co.id/1BINMk6qFO",
    image: "https://down-bs-id.img.susercontent.com/id-11134207-7rask-m4uqj39wjx9239.webp"
  },
 {
    category: "jaket",
    name: "House of Smith Jaket Bomber Pria - Bomen Black",
    price: "Rp225.000",
    link: "https://s.shopee.co.id/6pwk7YWyck",
    image: "https://down-bs-id.img.susercontent.com/id-11134207-7r98v-m09q95vxp1kn75.webp"
  },
{
    category: "jaket",
    name: "XUA Jaket Bomber Bolak Balik Unisex Tebal Musim Dingin Terbaru",
    price: "Rp180.000",
    link: "https://s.shopee.co.id/5L7wZho8k0",
    image: "https://down-aka-id.img.susercontent.com/id-11134207-7qukw-limkogcy8cbb68.webp"
  },
 {
    category: "jaket",
    name: "Hoodie Zipper Jumbo Polos Pria Wanita L XL XXL XXXL XXXXL XXXXXL",
    price: "Rp59.669",
    link: "https://s.shopee.co.id/2qQbbkJVVQ",
    image: "https://down-aka-id.img.susercontent.com/id-11134207-7r98z-lu7zpw7w07o27c.webp"
  },
 {
    category: "jaket",
    name: "Jaket Anti Air Tebal MnG Pria wanita Waterproof Windproof Winter Outdoor Puffer Tebal Musim Dingin",
    price: "Rp140.682",
    link: "https://s.shopee.co.id/808hlZem63",
    image: "https://down-aka-id.img.susercontent.com/id-11134207-7rbka-ma330au13k8jdb.webp"
  },
 {
    category: "jaket",
    name: "JAKET JEANS CEWEK MURAH JUMBO OVER SIZE M - XXXL LD 120cm MUAT 95KG JAKET JEANS WANITA JAKET Nanstore09",
    price: "Rp108.300",
    link: "https://s.shopee.co.id/AUq2mT8LZc",
    image: "https://i.imgur.com/aI7mmbO.jpeg"
  },
 {
    category: "fashion",
    name: "Sarung BHS Classic Gold Premium motif DGA SSF DKA GOLD Sarung Tenun Halus Songket Pria Dewasa",
    price: "Rp254.000",
    link: "https://s.shopee.co.id/7Kt12vZYlY",
    image: "https://down-bs-id.img.susercontent.com/id-11134207-8224p-mjgf4884p4p344.webp"
  },
  {
    category: "fashion",
    name: "SARUNG BHS INFINITY GOLD-SILVER DAN COSMO HITAM PUTIH POLOS KUALITAS TERTINGGI (COD/BAYAR DI TEMPAT) SARUNG MURAH ORIGINAL 100% BHS MOTIF TERBARU",
    price: "Rp330.000",
    link: "https://s.shopee.co.id/8V4yRAmhRA",
    image: "https://down-tx-id.img.susercontent.com/id-11134207-8224t-mkf8pmcspfrc03.webp"
  },
  {
    category: "fashion",
    name: "Sarung GAJAH DUDUK Asia Kembang ASLI ORIGINAL - Original Kain Tenun Dewasa Pria Laki Cowo Sholat Solat",
    price: "Rp50.010",
    link: "https://s.shopee.co.id/9UxVdygeeK",
    image: "https://down-bs-id.img.susercontent.com/2851b12f9149cb9bd099ceae90a553ff.webp"
  },
  {
    category: "fashion",
    name: "Sarung Batik Motif Kekinian Terbaru Gus Iqdam",
    price: "Rp34.200",
    link: "https://s.shopee.co.id/4AvzHOR4m9",
    image: "https://down-bs-id.img.susercontent.com/id-11134207-7r98u-lsiqt2xmndx00f.webp"
  },
  {
    category: "fashion",
    name: "Sarung Ardan Family Brilliant By Ketjubung motif Songket Kembang Katun Rayon Premium Dewasa",
    price: "Rp120.000",
    link: "https://s.shopee.co.id/16QKGtnfC",
    image: "https://down-tx-id.img.susercontent.com/id-11134207-8224w-mkklmwqfrb464a.webp"
  },

];
