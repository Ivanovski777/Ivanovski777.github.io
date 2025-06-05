import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="bg-content2 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Icon icon="lucide:bar-chart-2" className="text-primary text-2xl" />
              <span className="font-bold ml-2 text-lg">ДневникТрейдера</span>
            </div>
            <p className="text-foreground-600 mb-4 max-w-md">
              Премиальные торговые дневники, разработанные, чтобы помочь трейдерам документировать, анализировать и улучшать свои торговые результаты.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter">
                <Icon icon="lucide:twitter" className="text-foreground-500 hover:text-primary text-xl" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Icon icon="lucide:instagram" className="text-foreground-500 hover:text-primary text-xl" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Icon icon="lucide:facebook" className="text-foreground-500 hover:text-primary text-xl" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Icon icon="lucide:youtube" className="text-foreground-500 hover:text-primary text-xl" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Продукты</h3>
            <ul className="space-y-2">
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Стандартный дневник</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Профессиональный дневник</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Комплект дневников</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Индивидуальные заказы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">О нас</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Контакты</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Политика конфиденциальности</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Условия использования</Link></li>
            </ul>
          </div>
        </div>
        
        <Divider className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-500 text-sm">
            © {new Date().getFullYear()} ДневникТрейдера. Все права защищены.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="#" color="foreground" className="text-foreground-500 text-sm hover:text-primary">Политика конфиденциальности</Link>
            <Link href="#" color="foreground" className="text-foreground-500 text-sm hover:text-primary">Условия использования</Link>
            <Link href="#" color="foreground" className="text-foreground-500 text-sm hover:text-primary">Доставка</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};