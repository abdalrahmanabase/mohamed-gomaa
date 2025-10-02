<?php

return [

    'columns' => [

        'text' => [

            'actions' => [
                'collapse_list' => 'إخفاء :count عناصر إضافية',
                'expand_list' => 'عرض :count عناصر إضافية',
            ],

            'more_list_items' => 'و :count عناصر إضافية',

        ],

        'tags' => [

            'actions' => [
                'attach' => 'إرفاق',
                'detach' => 'إلغاء الإرفاق',
            ],

        ],

    ],

    'fields' => [

        'bulk_select_page' => [
            'label' => 'تحديد/إلغاء تحديد كافة العناصر للإجراءات الجماعية.',
        ],

        'bulk_select_record' => [
            'label' => 'تحديد :label للإجراءات الجماعية.',
        ],

        'search' => [
            'label' => 'بحث',
            'placeholder' => 'بحث',
            'indicator' => 'بحث',
        ],

    ],

    'summary' => [

        'heading' => 'ملخص',

        'subheadings' => [
            'all' => 'جميع :label',
            'group' => ':group ملخص',
            'page' => 'هذه الصفحة',
        ],

        'summarizers' => [

            'average' => [
                'label' => 'متوسط',
            ],

            'count' => [
                'label' => 'عدد',
            ],

            'sum' => [
                'label' => 'مجموع',
            ],

        ],

    ],

    'actions' => [

        'disable_reordering' => [
            'label' => 'إنهاء إعادة ترتيب السجلات',
        ],

        'enable_reordering' => [
            'label' => 'إعادة ترتيب السجلات',
        ],

        'filter' => [
            'label' => 'تصفية',
            'modal' => [
                'heading' => 'تصفية',
                'actions' => [
                    'apply' => [
                        'label' => 'تطبيق',
                    ],
                    'reset' => [
                        'label' => 'إعادة تعيين',
                    ],
                ],
            ],
        ],

        'group' => [
            'label' => 'تجميع',
            'modal' => [
                'heading' => 'تجميع',
                'actions' => [
                    'apply' => [
                        'label' => 'تطبيق',
                    ],
                    'reset' => [
                        'label' => 'إعادة تعيين',
                    ],
                ],
            ],
        ],

        'open_bulk_actions' => [
            'label' => 'فتح الإجراءات',
        ],

        'toggle_columns' => [
            'label' => 'تبديل الأعمدة',
        ],

    ],

    'empty' => [

        'heading' => 'لا توجد :model',

        'description' => 'إنشاء :model للبدء.',

    ],

    'filters' => [

        'actions' => [

            'remove' => [
                'label' => 'إزالة التصفية',
            ],

            'remove_all' => [
                'label' => 'إزالة جميع التصفيات',
            ],

            'reset' => [
                'label' => 'إعادة تعيين',
            ],

        ],

        'heading' => 'التصفيات',

        'indicator' => 'التصفيات النشطة',

        'multi_select' => [
            'placeholder' => 'الكل',
        ],

        'select' => [
            'placeholder' => 'الكل',
        ],

        'trashed' => [

            'label' => 'السجلات المحذوفة',

            'only_trashed' => 'السجلات المحذوفة فقط',

            'with_trashed' => 'مع السجلات المحذوفة',

            'without_trashed' => 'بدون السجلات المحذوفة',

        ],

    ],

    'grouping' => [

        'fields' => [

            'group' => [
                'label' => 'تجميع حسب',
                'placeholder' => 'تجميع حسب',
            ],

            'direction' => [

                'label' => 'اتجاه التجميع',

                'options' => [
                    'asc' => 'تصاعدي',
                    'desc' => 'تنازلي',
                ],

            ],

        ],

    ],

    'reorder_indicator' => 'اسحب السجلات لإعادة ترتيبها.',

    'selection_indicator' => [

        'selected_count' => 'تم تحديد سجل واحد|تم تحديد :count سجلات',

        'actions' => [

            'select_all' => [
                'label' => 'تحديد الكل (:count)',
            ],

            'deselect_all' => [
                'label' => 'إلغاء تحديد الكل',
            ],

        ],

    ],

    'sorting' => [

        'fields' => [

            'column' => [
                'label' => 'ترتيب حسب',
            ],

            'direction' => [

                'label' => 'اتجاه الترتيب',

                'options' => [
                    'asc' => 'تصاعدي',
                    'desc' => 'تنازلي',
                ],

            ],

        ],

    ],

];
