(function(angular) {
    angular.module('app', [])
        .controller('appController', [ function() {
            var self  = this;


            self.message = [];
            self.warName = '';
            self.phone = '';
            self.age = '';
            self.ad = '';
            self.cbeHasAcademic = [
              { name: 'experiente', id: 0, value: 'não' },
              { name: 'universitária', id: 1, value: 'sim' }
            ];

            self.cbeHasPlace = [
              { name: 'vou até você', id: 0, value: 'não' },
              { name: 'tenho local', id: 1, value: 'sim' }
            ];

            self.hasPlace = self.cbeHasPlace[0];
            self.hasAcademic = self.cbeHasAcademic[0];

            var height = [
                '1,70m',
                '1,55m',
                '1,65m',
                '1,68m',
                '1,73m',
                '1,80m',
                '1,64m'
            ];

            var description = [
                'seios e bunda grandes',
                'seios fartos, quadril grande',
                'bunda redonda e grande',
                'pé e mãos pequenas',
                'seios pequenos e firmes',
                'cabelos longos e macios',
                'olhos castanhos e boca carnuda',
                'pele morena da cor do pecado',
                'ninfetinha liberal de alto nível',
                'pele macia e cheirosa',
                'morena, sensual e sexy',
                'loira carinhosa e boa de papo',
                'pele bronzeada, tatuada e corpo sarado'
            ];

            var efect_phrases = [
                'sabor de prazer',
                'safada esperando para te enlouquecer com muito tesão',
                'rostinho de menina e corpo de mulher',
                'limpinha cheirosa e carinhosa',
                'gostinho de quero mais',
                'cara de anjo, uma diaba na cama',
                'experiência em favor do seu prazer',
                'total relaxamento e prazer',
                'sou carinhosa mas, adoro uma safadeza',
                'dama na sociedade e puta entre quatro paredes',
                'massagem com algo a mais',
                'medida certa para seu prazer'
            ];

            var final_phrases = [
                'adoro beijar na boca',
                'carinhosa e sem nojinhos',
                'oral babadinho',
                'oral molhadinho',
                'oral até o a última gotinha',
                'sexo estilo namoradinha',
                'me moi, me faz coxinha e me vende',
                'trato você como um rei',
                'garanto que não vão se arrepender',
                'tudo com muita dedicação e bem gostosinho'
            ];

            self.btnGenerate = function() {
                self.message = [];

                if (!self.warName) {
                    addMessage('Informe seu nome de guerra querida.');
                }

                if (!self.phone) {
                    addMessage('Informe seu fone pros boys te acharem ;)');
                }

                if (!self.age) {
                    addMessage('Faltou sua idade monamu.');
                }


                if (!self.message.length) {
                    var ads = '';
                    ads =(self.warName + ', ' + self.age +' anos ' + self.hasAcademic.name + '\n');
                    ads +=(efect_phrases[getRand(efect_phrases)] + '\n');
                    ads +=(height[getRand(height)] + ', ' + description[getRand(description)] + '\n');
                    ads +=(final_phrases[getRand(final_phrases)] + '\n');
                    ads +=('ligue agora: ' + self.phone + '\n');
                    ads +=(self.hasPlace.name);

                    self.ad = ads;
                }
                
            };

            self.btnRestart = function() {
                clearFields();
            }

            var getRand = function(lst) {
                return Math.floor(Math.random() * lst.length);
            };

            self.isEmpty = function() {
                return self.ad == '';
            }

            var addMessage = function(message) {
                self.message.push({
                    id: Math.random(),
                    message: message
                });
            };

            var clearFields = function() {
                self.message = [];
                self.warName = '';
                self.phone = '';
                self.age = '';
                self.ad = '';
                self.hasPlace = self.cbeHasPlace[0];
                self.hasAcademic = self.cbeHasAcademic[0];
            };

        }]);
}(angular))