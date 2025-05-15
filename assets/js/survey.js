// Soru çevirileri
const soruCevirileri = {
    Q1A: "Kendimi endişeli hissettiğim zamanlar oldu.",
    Q2A: "Ağzımın kuruduğunu fark ettim.",
    Q3A: "Hiçbir şeyin olumlu yanını göremediğim hissine kapıldım.",
    Q4A: "Nefes almakta zorlandığım zamanlar oldu.",
    Q5A: "Günlük işlerimi yapmakta zorlandım.",
    Q6A: "Aşırı tepki verdiğimi düşündüm.",
    Q7A: "Titreme hissettim (örneğin ellerimde).",
    Q8A: "Kendimi çok stresli hissettim.",
    Q9A: "Endişeli olduğum için bir şeylerin korkutucu olacağını düşündüm.",
    Q10A: "Geleceğe dair umudumu kaybettim.",
    Q11A: "Kendimi huzursuz hissettim.",
    Q12A: "Kendimi rahatlamakta zorlandım.",
    Q13A: "Kendimi üzgün ve depresif hissettim.",
    Q14A: "Normal şeylere karşı bile sabırsız oldum.",
    Q15A: "Panik atak geçireceğimi düşündüm.",
    Q16A: "Hiçbir şeyden zevk alamadım.",
    Q17A: "Kendimi değersiz hissettim.",
    Q18A: "Kendimi sinirli hissettim.",
    Q19A: "Kalp atışlarımın hızlandığını fark ettim.",
    Q20A: "Korku hissettim.",
    Q21A: "Hayatın anlamsız olduğunu düşündüm.",
    Q22A: "Kendimi gergin hissettim.",
    Q23A: "Ani korku hisleri yaşadım.",
    Q24A: "Kendimi canlı hissetmekte zorlandım.",
    Q25A: "Kendimi kolayca üzgün veya ağlamaklı hissettim.",
    Q26A: "Kendimi sinirli hissettim.",
    Q27A: "Başkalarının beni anlamadığını düşündüm.",
    Q28A: "Kendimi çok endişeli hissettim.",
    Q29A: "Kendimi çok kötü hissettim.",
    Q30A: "Kendimi çok sinirli hissettim.",
    Q31A: "Kendimi çok gergin hissettim.",
    Q32A: "Kendimi çok üzgün hissettim.",
    Q33A: "Kendimi çok endişeli hissettim.",
    Q34A: "Kendimi çok depresif hissettim.",
    Q35A: "Kendimi çok stresli hissettim.",
    Q36A: "Kendimi çok yorgun hissettim.",
    Q37A: "Kendimi çok bitkin hissettim.",
    Q38A: "Kendimi çok tükenmiş hissettim.",
    Q39A: "Kendimi çok yıpranmış hissettim.",
    Q40A: "Kendimi çok huzursuz hissettim.",
    Q41A: "Kendimi çok kaygılı hissettim.",
    Q42A: "Kendimi çok endişeli hissettim."
};

// Soruları oluştur
function createQuestions() {
    const container = document.getElementById('questionsContainer');
    
    // Soruları sırala
    const sortedQuestions = Object.keys(soruCevirileri).sort((a, b) => {
        const numA = parseInt(a.replace('Q', '').replace('A', ''));
        const numB = parseInt(b.replace('Q', '').replace('A', ''));
        return numA - numB;
    });

    sortedQuestions.forEach(questionKey => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'row form-group';
        
        questionDiv.innerHTML = `
            <div class="col col-md-3">
                <label class="form-control-label">${questionKey}</label>
            </div>
            <div class="col-12 col-md-9">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="${questionKey}" value="1" required>
                    <label class="form-check-label">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="${questionKey}" value="2">
                    <label class="form-check-label">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="${questionKey}" value="3">
                    <label class="form-check-label">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="${questionKey}" value="4">
                    <label class="form-check-label">4</label>
                </div>
                <small class="form-text text-muted">${soruCevirileri[questionKey]}</small>
            </div>
        `;
        
        container.appendChild(questionDiv);
    });
}

// Form gönderildiğinde
document.getElementById('surveyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form verilerini topla
    const formData = new FormData(this);
    const answers = {};
    
    for (let [key, value] of formData.entries()) {
        answers[key] = value;
    }
    
    // Konsola yazdır
    console.log('Anket Cevapları:', answers);
    
    // Başarı mesajı göster
    Swal.fire({
        title: 'Teşekkürler!',
        text: 'Anketiniz başarıyla gönderildi.',
        icon: 'success',
        confirmButtonText: 'Tamam'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'index.html';
        }
    });
});

// Sayfa yüklendiğinde soruları oluştur
document.addEventListener('DOMContentLoaded', createQuestions); 