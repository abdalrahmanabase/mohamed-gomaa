<x-filament-panels::page>

    {{-- Filter Form Section --}}
    <div class="card filter-card">
        <form wire:submit.prevent>
            <div class="filter-grid">
                {{ $this->form }}
            </div>
        </form>
    </div>

    {{-- Patient Cards Grid --}}
    <div class="patient-grid">
        @forelse ($patients as $patient)
            @php
                $sessionDate = \Illuminate\Support\Carbon::parse($patient->next_session_at)->startOfDay();
                $now = \Illuminate\Support\Carbon::now()->startOfDay();
                $daysLeft = max(0, $now->diffInDays($sessionDate, false));
                $badgeColor = $daysLeft === 0 ? 'badge-red' : ($daysLeft <= 3 ? 'badge-yellow' : 'badge-green');
                $borderColor = $daysLeft === 0 ? 'card-red' : ($daysLeft <= 3 ? 'card-yellow' : 'card-green');
            @endphp

            <div class="card patient-card {{ $borderColor }}">
                <div class="card-header">
                    <div class="card-title">
                        <h3>{{ $patient->name }}</h3>
                        <p>{{ $patient->type }}</p>
                    </div>
                    @if($patient->next_session_at)
                        <span class="badge {{ $badgeColor }}">
                            {{ $daysLeft === 0 ? 'اليوم' : 'بعد ' . $daysLeft . ' يوم' }}
                        </span>
                    @endif
                </div>

                <div class="card-content">
                    @if($patient->phone)
                        <div class="info-line">
                            <x-heroicon-o-phone class="icon" />
                            <span>{{ $patient->phone }}</span>
                        </div>
                    @endif

                    @if($patient->next_session_at)
                        <div class="info-line">
                            <x-heroicon-o-calendar class="icon" />
                            <span>{{ $patient->next_session_at->translatedFormat('l, d/m/Y - g:i A') }}</span>
                        </div>
                    @endif

                    @if($patient->diagnosis)
                        <div class="info-block">
                            <strong>التشخيص:</strong>
                            <p>{{ $patient->diagnosis }}</p>
                        </div>
                    @endif

                    @if($patient->description)
                        <div class="info-block">
                            <strong>ملاحظات:</strong>
                            <p>{{ $patient->description }}</p>
                        </div>
                    @endif
                </div>

                <div class="card-footer">
                    <a href="{{ \App\Filament\Resources\PatientResource::getUrl('edit', ['record' => $patient]) }}"
                    class="edit-button">
                        <x-heroicon-o-pencil class="icon" />
                        <span>تعديل السجل</span>
                    </a>
                </div>
            </div>
        @empty
            <div class="empty-state">
                <x-heroicon-o-user-group class="icon-large" />
                <h3>لا يوجد مرضى لديهم جلسات قادمة</h3>
                <p>جرب تغيير فلاتر البحث أو إضافة مرضى جدد</p>
            </div>
        @endforelse
    </div>
</x-filament-panels::page>
