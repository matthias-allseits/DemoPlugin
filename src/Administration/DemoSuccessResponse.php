<?php

declare(strict_types=1);

namespace DemoPlugin\Administration;

use Shopware\Core\Framework\Struct\ArrayStruct;
use Shopware\Core\System\SalesChannel\StoreApiResponse;

class DemoSuccessResponse extends StoreApiResponse
{

    public function __construct()
    {
        parent::__construct(new ArrayStruct(['success' => true]));
    }
}
