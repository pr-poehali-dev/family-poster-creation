import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  icon: string;
}

interface FamilyMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Tradition {
  title: string;
  description: string;
  icon: string;
}

const Index = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const timelineEvents: TimelineEvent[] = [
    {
      year: 2000,
      title: 'Наша свадьба',
      description: 'День, когда мы начали писать нашу семейную историю',
      icon: 'Heart'
    },
    {
      year: 2005,
      title: 'Первый ребенок',
      description: 'Рождение нашего первого сына - самый счастливый момент',
      icon: 'Baby'
    },
    {
      year: 2010,
      title: 'Переезд в новый дом',
      description: 'Построили дом нашей мечты, где создаём воспоминания',
      icon: 'Home'
    },
    {
      year: 2015,
      title: 'Второй ребенок',
      description: 'Наша семья стала полной с появлением дочки',
      icon: 'Heart'
    },
    {
      year: 2020,
      title: 'Семейное путешествие',
      description: 'Первая большая поездка всей семьёй по Европе',
      icon: 'Plane'
    },
    {
      year: 2025,
      title: 'Юбилей',
      description: '25 лет счастливой совместной жизни',
      icon: 'Sparkles'
    }
  ];

  const familyMembers: FamilyMember[] = [
    {
      name: 'Александр',
      role: 'Папа',
      bio: 'Глава семьи, любит готовить и рассказывать истории',
      image: 'https://cdn.poehali.dev/projects/5c71da08-6807-4ae8-8b8a-ee782a658125/files/252255c0-2b9e-40b9-a782-a3c9220123a7.jpg'
    },
    {
      name: 'Елена',
      role: 'Мама',
      bio: 'Сердце семьи, создаёт уют и тепло в доме',
      image: 'https://cdn.poehali.dev/projects/5c71da08-6807-4ae8-8b8a-ee782a658125/files/252255c0-2b9e-40b9-a782-a3c9220123a7.jpg'
    },
    {
      name: 'Максим',
      role: 'Старший сын',
      bio: 'Отличник и спортсмен, мечтает стать инженером',
      image: 'https://cdn.poehali.dev/projects/5c71da08-6807-4ae8-8b8a-ee782a658125/files/252255c0-2b9e-40b9-a782-a3c9220123a7.jpg'
    },
    {
      name: 'София',
      role: 'Младшая дочь',
      bio: 'Художница и мечтательница, любит рисовать и читать',
      image: 'https://cdn.poehali.dev/projects/5c71da08-6807-4ae8-8b8a-ee782a658125/files/252255c0-2b9e-40b9-a782-a3c9220123a7.jpg'
    }
  ];

  const traditions: Tradition[] = [
    {
      title: 'Воскресные обеды',
      description: 'Каждое воскресенье вся семья собирается за большим столом',
      icon: 'Utensils'
    },
    {
      title: 'Летние походы',
      description: 'Традиционный поход в горы каждое лето',
      icon: 'Mountain'
    },
    {
      title: 'Новогодняя выпечка',
      description: 'Вместе печём имбирные пряники перед Новым годом',
      icon: 'Cookie'
    },
    {
      title: 'Семейные игры',
      description: 'Вечер настольных игр каждую пятницу',
      icon: 'Gamepad2'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F2FCE2] via-[#FEF7CD] to-[#FEC6A1]">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#2D1810]">Наша Семья</h1>
          <p className="text-lg text-[#5A3E2B] max-w-2xl mx-auto">
            История, традиции и моменты, которые делают нас особенными
          </p>
        </header>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#2D1810]">Временная шкала</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FEC6A1]"></div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card
                      className="cursor-pointer transition-all hover:scale-105 hover:shadow-xl bg-white/90 backdrop-blur"
                      onClick={() => setSelectedYear(selectedYear === event.year ? null : event.year)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-[#E5DEFF] text-[#2D1810] hover:bg-[#E5DEFF]">
                            {event.year}
                          </Badge>
                          <Icon name={event.icon as any} size={20} className="text-[#FEC6A1]" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-[#2D1810]">{event.title}</h3>
                        {selectedYear === event.year && (
                          <p className="text-[#5A3E2B] animate-accordion-down">{event.description}</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#FEC6A1] border-4 border-white shadow-lg z-10"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#2D1810]">Члены семьи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyMembers.map((member, index) => (
              <Card
                key={member.name}
                className="overflow-hidden hover:scale-105 transition-all cursor-pointer animate-scale-in bg-white/90 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-[#2D1810]">{member.name}</h3>
                  <Badge className="mb-3 bg-[#FFDEE2] text-[#2D1810] hover:bg-[#FFDEE2]">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-[#5A3E2B]">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#2D1810]">Наши традиции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traditions.map((tradition, index) => (
              <Card
                key={tradition.title}
                className="hover:scale-105 transition-all animate-fade-in bg-white/90 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E5DEFF] flex items-center justify-center flex-shrink-0">
                      <Icon name={tradition.icon as any} size={24} className="text-[#2D1810]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#2D1810]">{tradition.title}</h3>
                      <p className="text-[#5A3E2B]">{tradition.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#2D1810]">Фотогалерея</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'https://cdn.poehali.dev/projects/5c71da08-6807-4ae8-8b8a-ee782a658125/files/252255c0-2b9e-40b9-a782-a3c9220123a7.jpg',
              'https://cdn.poehali.dev/projects/5c71da08-6807-4ae8-8b8a-ee782a658125/files/c98b91ad-7b01-40ad-8c08-3c48f90005bc.jpg',
              'https://cdn.poehali.dev/projects/5c71da08-6807-4ae8-8b8a-ee782a658125/files/e9148f48-a551-428a-a5ee-631a8936648e.jpg'
            ].map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer group overflow-hidden rounded-lg animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <img
                      src={image}
                      alt={`Семейное фото ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={image}
                    alt={`Семейное фото ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        <footer className="text-center py-8 border-t border-[#FEC6A1]/30">
          <p className="text-[#5A3E2B] flex items-center justify-center gap-2">
            Сделано с <Icon name="Heart" size={16} className="text-[#FEC6A1]" /> для нашей семьи
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
