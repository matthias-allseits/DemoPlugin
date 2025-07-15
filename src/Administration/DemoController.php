<?php

declare(strict_types=1);

namespace DemoPlugin\Administration;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;


class DemoController extends AbstractController
{
    public function __construct(
    ) {
    }

    public function demoTest(): Response
    {

        return new DemoSuccessResponse();
    }
}
