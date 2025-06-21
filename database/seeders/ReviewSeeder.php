<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Review;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $reviews = [
            [
                'name' => 'أحمد محمد',
                'position' => 'الرئيس التنفيذي، شركة التقنية',
                'content' => 'العمل مع هذا الفريق كان تجربة رائعة. ساعدت خبرتهم وتفانيهم في تحقيق نتائج متميزة. أنصح بهم بشدة!',
                'rating' => 5,
                'order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'سارة أحمد',
                'position' => 'مديرة التسويق',
                'content' => 'مستوى الاحترافية والاهتمام بالتفاصيل متميز. إنهم يتجاوزون توقعاتنا باستمرار.',
                'rating' => 5,
                'order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'محمد علي',
                'position' => 'مدير المشاريع',
                'content' => 'نهجهم المبتكر وخبرتهم التقنية كانت أساسية في نجاحنا. أنصح بهم بشدة!',
                'rating' => 4,
                'order' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'فاطمة حسن',
                'position' => 'مصممة جرافيك',
                'content' => 'تجربة رائعة مع الفريق. ساعدوني في تحقيق أهدافي باحترافية عالية.',
                'rating' => 5,
                'order' => 4,
                'is_active' => true,
            ],
            [
                'name' => 'علي محمود',
                'position' => 'مطور برمجيات',
                'content' => 'فريق متعاون ومحترف. ساعدوني في تطوير مشروعي بنجاح.',
                'rating' => 4,
                'order' => 5,
                'is_active' => true,
            ],
        ];

        foreach ($reviews as $review) {
            Review::create($review);
        }
    }
}
