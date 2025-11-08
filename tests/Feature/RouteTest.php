<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\InfoCard;
use App\Models\Review;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RouteTest extends TestCase
{
    use RefreshDatabase;
    /**
     * Test home page returns successful response.
     */
    public function test_home_page_returns_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /**
     * Test services page returns successful response.
     */
    public function test_services_page_returns_successful_response(): void
    {
        $response = $this->get('/services');

        $response->assertStatus(200);
    }

    /**
     * Test about page returns successful response.
     */
    public function test_about_page_returns_successful_response(): void
    {
        $response = $this->get('/about');

        $response->assertStatus(200);
    }

    /**
     * Test Cupping page returns successful response.
     */
    public function test_cupping_page_returns_successful_response(): void
    {
        $response = $this->get('/Cupping');

        $response->assertStatus(200);
    }

    /**
     * Test Bee_poison page returns successful response.
     */
    public function test_bee_poison_page_returns_successful_response(): void
    {
        $response = $this->get('/Bee_poison');

        $response->assertStatus(200);
    }

    /**
     * Test Physical_therapy page returns successful response.
     */
    public function test_physical_therapy_page_returns_successful_response(): void
    {
        $response = $this->get('/Physical_therapy');

        $response->assertStatus(200);
    }

    /**
     * Test Plasma page returns successful response.
     */
    public function test_plasma_page_returns_successful_response(): void
    {
        $response = $this->get('/Plasma');

        $response->assertStatus(200);
    }

    /**
     * Test derma page returns successful response.
     */
    public function test_derma_page_returns_successful_response(): void
    {
        $response = $this->get('/derma');

        $response->assertStatus(200);
    }

    /**
     * Test mesotherapy page returns successful response.
     */
    public function test_mesotherapy_page_returns_successful_response(): void
    {
        $response = $this->get('/mesotherapy');

        $response->assertStatus(200);
    }

    /**
     * Test herbs-oils page returns successful response.
     */
    public function test_herbs_oils_page_returns_successful_response(): void
    {
        $response = $this->get('/herbs-oils');

        $response->assertStatus(200);
    }

    /**
     * Test API reviews endpoint returns successful response.
     */
    public function test_api_reviews_returns_successful_response(): void
    {
        $response = $this->get('/api/reviews');

        $response->assertStatus(200);
        $response->assertJson([]); // Empty array when no reviews exist
    }

    /**
     * Test API cards endpoint returns successful response.
     */
    public function test_api_cards_returns_successful_response(): void
    {
        $response = $this->get('/cards/home');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'data'
        ]);
        $this->assertEquals('success', $response->json('status'));
    }
}

