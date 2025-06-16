import dns from 'dns/promises'

const ip = await dns.lookup("www.programmerzamannow.com")
console.log(ip)

// jdai fungisnya adalah untuk mengeteahui beberapa info dari sebuah dns, atau alat oencari domain, (cari kalo lupa di website mdn, wikipedia, dll)
