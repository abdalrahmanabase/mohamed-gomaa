<?php

return [

    'builder' => [

        'actions' => [

            'clone' => [
                'label' => 'استنساخ',
            ],

            'add' => [
                'label' => 'إضافة إلى :label',
            ],

            'add_between' => [
                'label' => 'إضافة بين',
            ],

            'delete' => [
                'label' => 'حذف',
            ],

            'reorder' => [
                'label' => 'نقل :label',
            ],

            'move_down' => [
                'label' => 'نقل :label لأسفل',
            ],

            'move_up' => [
                'label' => 'نقل :label لأعلى',
            ],

            'collapse' => [
                'label' => 'طي :label',
            ],

            'expand' => [
                'label' => 'توسيع :label',
            ],

            'collapse_all' => [
                'label' => 'طي الكل',
            ],

            'expand_all' => [
                'label' => 'توسيع الكل',
            ],

        ],

    ],

    'checkbox_list' => [

        'actions' => [

            'deselect_all' => [
                'label' => 'إلغاء تحديد الكل',
            ],

            'select_all' => [
                'label' => 'تحديد الكل',
            ],

        ],

    ],

    'file_upload' => [

        'editor' => [

            'actions' => [

                'cancel' => [
                    'label' => 'إلغاء',
                ],

                'drag_cancel' => [
                    'label' => 'إلغاء السحب',
                ],

                'upload' => [
                    'label' => 'رفع',
                ],

            ],

            'drop_zone' => [
                'label' => 'اسحب الملفات هنا أو انقر للرفع',
            ],

            'file_input' => [
                'label' => 'ملف',
            ],

            'reorder' => [
                'label' => 'إعادة ترتيب الملفات',
            ],

            'remove' => [
                'label' => 'إزالة الملف',
            ],

        ],

        'reorder' => [

            'actions' => [

                'cancel' => [
                    'label' => 'إلغاء',
                ],

                'save' => [
                    'label' => 'حفظ الترتيب',
                ],

            ],

        ],

    ],

    'key_value' => [

        'actions' => [

            'add' => [
                'label' => 'إضافة صف',
            ],

            'delete' => [
                'label' => 'حذف الصف',
            ],

            'reorder' => [
                'label' => 'إعادة ترتيب الصف',
            ],

        ],

        'fields' => [

            'key' => [
                'label' => 'المفتاح',
                'placeholder' => 'أدخل المفتاح...',
            ],

            'value' => [
                'label' => 'القيمة',
                'placeholder' => 'أدخل القيمة...',
            ],

        ],

    ],

    'markdown_editor' => [

        'toolbar_buttons' => [
            'attach_files' => 'إرفاق الملفات',
            'bold' => 'عريض',
            'bullet_list' => 'قائمة نقطية',
            'code_block' => 'كود',
            'edit' => 'تعديل',
            'italic' => 'مائل',
            'link' => 'رابط',
            'ordered_list' => 'قائمة مرقمة',
            'preview' => 'معاينة',
            'strike' => 'خط في المنتصف',
        ],

    ],

    'radio' => [

        'boolean' => [
            'true' => 'نعم',
            'false' => 'لا',
        ],

    ],

    'repeater' => [

        'actions' => [

            'add' => [
                'label' => 'إضافة إلى :label',
            ],

            'add_between' => [
                'label' => 'إضافة بين',
            ],

            'delete' => [
                'label' => 'حذف',
            ],

            'clone' => [
                'label' => 'استنساخ',
            ],

            'reorder' => [
                'label' => 'نقل :label',
            ],

            'move_down' => [
                'label' => 'نقل :label لأسفل',
            ],

            'move_up' => [
                'label' => 'نقل :label لأعلى',
            ],

            'collapse' => [
                'label' => 'طي :label',
            ],

            'expand' => [
                'label' => 'توسيع :label',
            ],

            'collapse_all' => [
                'label' => 'طي الكل',
            ],

            'expand_all' => [
                'label' => 'توسيع الكل',
            ],

        ],

    ],

    'rich_editor' => [

        'dialogs' => [

            'link' => [

                'actions' => [
                    'link' => 'ربط',
                    'unlink' => 'إلغاء الربط',
                ],

                'label' => 'الرابط',

                'placeholder' => 'أدخل الرابط',

            ],

        ],

        'toolbar_buttons' => [
            'attach_files' => 'إرفاق الملفات',
            'blockquote' => 'اقتباس',
            'bold' => 'عريض',
            'bullet_list' => 'قائمة نقطية',
            'code_block' => 'كود',
            'h1' => 'عنوان',
            'h2' => 'رأس',
            'h3' => 'رأس فرعي',
            'italic' => 'مائل',
            'link' => 'رابط',
            'ordered_list' => 'قائمة مرقمة',
            'redo' => 'إعادة',
            'strike' => 'خط في المنتصف',
            'undo' => 'تراجع',
        ],

    ],

    'select' => [

        'actions' => [

            'create_option' => [
                'modal' => [
                    'heading' => 'إنشاء',

                    'actions' => [
                        'create' => [
                            'label' => 'إنشاء',
                        ],
                    ],
                ],
            ],

            'edit_option' => [
                'modal' => [
                    'heading' => 'تعديل',

                    'actions' => [
                        'save' => [
                            'label' => 'حفظ',
                        ],
                    ],
                ],
            ],

        ],

        'boolean' => [
            'true' => 'نعم',
            'false' => 'لا',
        ],

        'loading_message' => 'جاري التحميل...',

        'max_items_message' => 'يمكن تحديد :count عنصر فقط.',

        'no_search_results_message' => 'لا توجد خيارات تطابق البحث.',

        'placeholder' => 'اختر خيار',

        'searching_message' => 'جاري البحث...',

        'search_placeholder' => 'البحث...',

    ],

    'tags_input' => [
        'placeholder' => 'علامة جديدة',
    ],

    'text_input' => [

        'actions' => [
            'hide_password' => [
                'label' => 'إخفاء كلمة المرور',
            ],
            'show_password' => [
                'label' => 'إظهار كلمة المرور',
            ],
        ],

    ],

    'toggle' => [

        'boolean' => [
            'true' => 'نعم',
            'false' => 'لا',
        ],

    ],

    'wizard' => [

        'actions' => [

            'previous_step' => [
                'label' => 'السابق',
            ],

            'next_step' => [
                'label' => 'التالي',
            ],

        ],

    ],

];
