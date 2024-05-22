<template>
    <div class="flex items-start h-full mt-5">
        <div class="px-2">
            <div class="border p-3 mb-3 bg-white rounded-md">
                <div>
                    <div>
                        <span class="text-sm font-bold">
                            Daftar
                        </span>
                    </div>
                    <div>
                        <small>
                            Jika Anda membuat akun, Anda bisa mendapatkan layanan yang dipersonalisasi seperti melihat
                            riwayat pembelian dan mendapatkan kupon diskon dengan keanggotaan Anda. Daftar hari ini,
                            gratis!
                        </small>
                    </div>
                    <div class="w-full mt-3">
                        <button class="border py-1.5 px-2 w-full bg-slate-900 text-white font-bold">
                            Daftar
                        </button>
                    </div>
                </div>
            </div>
            <div class="border p-3 bg-white rounded-md">
                <div>
                    <div>
                        <span class="text-sm font-bold">
                            Masuk
                        </span>
                    </div>
                    <div>
                        <span class="text-xs">
                            Masukan Alamat Email dan kata sandi anda
                        </span>
                    </div>
                </div>

                <div class="mt-5">
                    <label class="text-xs font-bold" for="">Masukan Alamat Email *</label>
                    <div class="mt-2">
                        <input type="email" placeholder="email" class="w-full border py-4 px-3 rounded-sm h-7">
                    </div>
                    <label class="text-xs font-bold" for="">Masukan Password *</label>
                    <div class="mt-2">
                        <input type="password" placeholder="password" class="w-full border py-4 px-3 rounded-sm h-7">
                        <small>Kata sandi minimal 8 karakter, dan terdiri dari huruf dan angka. Hanya simbol -_.@ yang
                            dapat digunakan.</small>
                    </div>

                    <div class="w-full mt-3">
                        <button class="border py-1.5 px-2 w-full bg-slate-900 text-white font-bold">
                            Masuk
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
