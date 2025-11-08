<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Patient;
use App\Models\InfoCard;
use App\Models\Review;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ModelTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test Patient model can be created.
     */
    public function test_patient_model_can_be_created(): void
    {
        $patient = Patient::create([
            'name' => 'Test Patient',
            'phone' => '01234567890',
            'type' => 'hijama',
            'session_status' => 'upcoming',
            'next_session_at' => now()->addDays(7),
        ]);

        $this->assertDatabaseHas('patients', [
            'name' => 'Test Patient',
            'phone' => '01234567890',
            'type' => 'hijama',
            'session_status' => 'upcoming',
        ]);

        $this->assertInstanceOf(Patient::class, $patient);
    }

    /**
     * Test Patient model fillable attributes.
     */
    public function test_patient_model_has_correct_fillable_attributes(): void
    {
        $patient = new Patient();
        $fillable = $patient->getFillable();

        $this->assertContains('name', $fillable);
        $this->assertContains('phone', $fillable);
        $this->assertContains('type', $fillable);
        $this->assertContains('session_status', $fillable);
        $this->assertContains('next_session_at', $fillable);
    }

    /**
     * Test InfoCard model can be created.
     */
    public function test_info_card_model_can_be_created(): void
    {
        $infoCard = InfoCard::create([
            'title' => 'Test Card',
            'description' => 'Test Description',
            'location' => 'home',
            'order' => 1,
        ]);

        $this->assertDatabaseHas('info_cards', [
            'title' => 'Test Card',
            'location' => 'home',
        ]);

        $this->assertInstanceOf(InfoCard::class, $infoCard);
    }

    /**
     * Test Review model can be created.
     */
    public function test_review_model_can_be_created(): void
    {
        $review = Review::create([
            'name' => 'Test Reviewer',
            'position' => 'Test Position',
            'content' => 'Test Review Content',
            'rating' => 5,
            'is_active' => true,
            'order' => 1,
        ]);

        $this->assertDatabaseHas('reviews', [
            'name' => 'Test Reviewer',
            'rating' => 5,
            'is_active' => true,
        ]);

        $this->assertInstanceOf(Review::class, $review);
    }

    /**
     * Test Review active scope.
     */
    public function test_review_active_scope(): void
    {
        Review::create([
            'name' => 'Active Review',
            'position' => 'Position',
            'content' => 'Content',
            'rating' => 5,
            'is_active' => true,
            'order' => 1,
        ]);

        Review::create([
            'name' => 'Inactive Review',
            'position' => 'Position',
            'content' => 'Content',
            'rating' => 4,
            'is_active' => false,
            'order' => 2,
        ]);

        $activeReviews = Review::active()->get();

        $this->assertCount(1, $activeReviews);
        $this->assertEquals('Active Review', $activeReviews->first()->name);
    }

    /**
     * Test Review ordered scope.
     */
    public function test_review_ordered_scope(): void
    {
        Review::create([
            'name' => 'Second Review',
            'position' => 'Position',
            'content' => 'Content',
            'rating' => 5,
            'is_active' => true,
            'order' => 2,
        ]);

        Review::create([
            'name' => 'First Review',
            'position' => 'Position',
            'content' => 'Content',
            'rating' => 5,
            'is_active' => true,
            'order' => 1,
        ]);

        $orderedReviews = Review::ordered()->get();

        $this->assertEquals('First Review', $orderedReviews->first()->name);
        $this->assertEquals('Second Review', $orderedReviews->last()->name);
    }
}

